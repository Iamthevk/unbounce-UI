import Appointment from "@/components/Appointment";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Appointment />
    </main>
  );
}
