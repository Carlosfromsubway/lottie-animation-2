import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoadingAnimation from "../public/loading.json"
import Lottie from "lottie-react"
export default function Home() {
  return (
    <div>
      <Lottie animationData={LoadingAnimation} loop={true}/>
    </div>
  )
}
