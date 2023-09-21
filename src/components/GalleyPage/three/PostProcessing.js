import { forwardRef } from 'react'
import { useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { Color } from 'three'

const PostProcessing = forwardRef((_, ref) => {
  const { viewport } = useThree()

  // const { active, ior } = useControls({
  //   active: {
  //     value: true
  //   },
  //   ior: {
  //     value: 0.9,
  //     min: 0.9,
  //     max: 1
  //   }
  // })

  const active = false;

  return (
    active ? 
    <mesh position={[0, 0, 1]}>
      <planeGeometry args={[viewport.width, viewport.height]}/>
      <MeshTransmissionMaterial
        ref={ref}
        background={new Color('white')}
        // transmission={1}
        // roughness={1}
        // metalness={0.4}
        // thickness={0}
        chromaticAberration={0.06}
        // anisotropy={0}
        distortion={0}
        // reflectivity={1}
        ior={ 0.93 }
      />
    </mesh> : null
  )
})

export default PostProcessing
