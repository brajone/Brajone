import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20">

      <div className="container grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-[#D4AF37]">
            BRAJONE
          </h2>

          <p className="text-gray-400 mt-5">
            Luxury Real Estate in Vrindavan.
            Your trusted partner for premium plots,
            villas and investment opportunities.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link href="/">Home</Link>
            <Link href="/properties">Properties</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

          </div>
        </div>

        <div>

          <h3 className="font-bold text-xl mb-5">
            Contact
          </h3>

          <p>📍 Vrindavan</p>
          <p>📞 7900780022</p>
          <p>📞 7900780023</p>
          <p>📧 brajone.com@gmail.com</p>

        </div>

        <div>

          <h3 className="font-bold text-xl mb-5">
            Follow Us
          </h3>

          <p>Instagram : @brajone.in</p>
          <p>Facebook : @brajone.com</p>
          <p>LinkedIn : brajone.in</p>

        </div>

      </div>

      <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
        © 2026 Brajone Real Estate. All Rights Reserved.
      </div>

    </footer>
  );
}
