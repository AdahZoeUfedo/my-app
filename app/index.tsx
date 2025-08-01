// /app/index.tsx
import { Redirect } from 'expo-router';
import { Link } from 'expo-router';


export default function Home() {
  return <Redirect href="/login" />;
}
