import React from 'react'
import Actors from '../components/Actors';
import Genres from '../components/Genres';
import Navbar from "../components/Nav";


export default function MoviesPage() {
  return (
    <>
      <Navbar />
      <Genres />
      <Actors/>
    </>
  )
}
