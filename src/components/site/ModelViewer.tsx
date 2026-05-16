import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface ModelViewerProps {
  src: string;
  poster?: string;
  posterAlt?: string;
  className?: string;
  /** Camera distance multiplier. 1 = tight fit, higher = farther away. Default 1.4. */
  zoom?: number;
}

export function ModelViewer({ src, poster, posterAlt, className, zoom = 1.4 }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Lazy: only mount three.js when visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(4, 3, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(5, 8, 5);
    scene.add(dir);
    const fill = new THREE.DirectionalLight(0xbfbfbf, 0.3);
    fill.position.set(-5, 2, -3);
    scene.add(fill);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 20;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;

    // Stop auto-rotate on user interaction
    const stopAuto = () => {
      controls.autoRotate = false;
    };
    renderer.domElement.addEventListener("pointerdown", stopAuto);

    const loader = new GLTFLoader();
    loader.load(
      src,
      (gltf) => {
        if (disposed) return;
        const model = gltf.scene;

        // Center & fit
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const fov = camera.fov * (Math.PI / 180);
        const dist = (maxDim / 2) / Math.tan(fov / 2) * zoom;
        camera.position.set(dist * 0.9, dist * 0.55, dist * 0.9);
        camera.near = dist / 100;
        camera.far = dist * 100;
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
        controls.target.set(0, 0, 0);
        controls.minDistance = maxDim * 0.5;
        controls.maxDistance = dist * 4;
        controls.update();

        scene.add(model);
        setLoaded(true);
      },
      undefined,
      (err) => {
        console.error("GLB load error", err);
        setError(true);
      },
    );

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.domElement.removeEventListener("pointerdown", stopAuto);
      controls.dispose();
      renderer.dispose();
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else if (mat) mat.dispose();
      });
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [inView, src]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-[#0a0a0a] ${className ?? ""}`}
    >
      {poster && (
        <img
          src={poster}
          alt={posterAlt ?? ""}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
      )}
      {!loaded && !error && (
        <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-background/70 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-silver backdrop-blur-sm">
          <span className="h-3 w-3 animate-spin rounded-full border border-silver/30 border-t-silver" />
          Loading 3D
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-silver">
          Unable to load 3D model
        </div>
      )}
    </div>
  );
}
