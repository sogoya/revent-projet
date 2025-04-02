import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="flex items-center justify-between p-4 max-w-xl mx-auto border-b">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">lempireflotte30</span>
            <span className="px-2 py-1 text-xs border rounded-full">Pro</span>
          </div>
          <div className="flex items-center text-yellow-500 text-sm">
            <span className="text-lg">★★★★★</span>
            <span className="ml-1 text-gray-600 text-xs">9</span>
          </div>
        </div>
      </div>
      <Link href="/membres">
        <button className="px-3 py-1 border border-teal-600 text-teal-600 rounded-md text-sm hover:bg-teal-700 hover:text-white transition">
          Explorer le Dressing
        </button>
      </Link>
    </div>
  );
}
