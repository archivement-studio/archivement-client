import { useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import Plane from './Plane'
import { useRecoilState } from 'recoil'
import GalleryPageImageAtom from '../../../state/GalleryPageImageAtom'

const CarouselItem = ({
  index,
  width,
  height,
  setActivePlane,
  activePlane,
  item
}) => {
  const $root = useRef()
  const [hover, setHover] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isCloseActive, setCloseActive] = useState(false)
  const { viewport } = useThree()
  const timeoutID = useRef()

  const [galleryImage, setGelleryImage] = useRecoilState(GalleryPageImageAtom);

  useEffect(() => {
    setGelleryImage(null);
  },[])


  useEffect(() => {
    if (activePlane === index) {
      setIsActive(activePlane === index)
      setCloseActive(true)
    } else {
      setIsActive(null)
    }
  }, [activePlane])

  useEffect(() => {
    gsap.killTweensOf($root.current.position)
    gsap.to($root.current.position, {
      z: isActive ? 0 : -0.01,
      duration: 0.2,
      ease: 'power3.out',
      delay: isActive ? 0 : 2
    })
  }, [isActive])

  /*------------------------------
  Hover effect
  ------------------------------*/
  useEffect(() => {
    const hoverScale = hover && !isActive ? 1.1 : 1
    gsap.to($root.current.scale, {
      x: hoverScale,
      y: hoverScale,
      duration: 0.5,
      ease: 'power3.out'
    })
  }, [hover, isActive])

  const handleClose = (e) => {
    setGelleryImage(null);
    e.stopPropagation()
    if (!isActive) return
    setActivePlane(null)
    setHover(false)
    clearTimeout(timeoutID.current)
    timeoutID.current = setTimeout(() => {
      setCloseActive(false)
    }, 1500) // The duration of this timer depends on the duration of the plane's closing animation.
  }

  return (
    <group
      ref={$root}
      onClick={() => {
        setActivePlane(index);
        setGelleryImage(item);
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Plane
        width={width}
        height={height}
        texture={item.image}
        active={isActive}
      />

      {isCloseActive ? (
        <mesh position={[0, 0, 0.01]} onClick={handleClose}>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial transparent={true} opacity={0} />
        </mesh>
      ) : null}
    </group>
  )
}

export default CarouselItem
