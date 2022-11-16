import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Layout from "../components/Layout";
import car from "../assets/car-repair.png";
import logo from "../assets/orchid-insurance.png";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Orchid Insurance - Home</title>
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="/icon-orchid.png" />
      </Head>
      <Layout>
        <div className="min-h-screen flex flex-col-reverse lg:flex-row justify-around p-10">
          <div className="self-center font-work-sans">
            <Image src={logo} alt="Orchid Insurance" width="350" className="mb-6" />
            <p className="font-bold text-3xl md:text-5xl">Selamat Datang!</p>
            <p className="text-sm md:text-lg mb-4 md:mb-8">Klaim asuransi kerusakan kendaraan anda dengan Orchid Insurance.</p>
            <Button label="Klaim Sekarang!" onClick={() => router.push("klaim")} />
          </div>
          <div className="self-center bg-[#DFD8C8] rounded-full mb-16 lg:mb-0">
            <Image src={car} alt="Car-Repair" width="500" height="500"></Image>
          </div>
        </div>
      </Layout>
    </>
  );
}
