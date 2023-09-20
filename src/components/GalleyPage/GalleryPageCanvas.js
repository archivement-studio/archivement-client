import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Carousel from './three/Carousel'
import './GalleryPageCanvas.css'

export default function GalleryPageCanvas(){
    return (
        <Canvas id='gallery-canvas'>
            <Suspense fallback={null}>
                <Carousel />
            </Suspense>
        </Canvas>
    );
}