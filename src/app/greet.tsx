'use client'
import { useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

export default function Greet() {
  useEffect(() => {
    invoke<string>('greet', { name: 'El Dood'})
      .then(console.log)
      .catch(console.error)
  }, [])

  return <></>
}

