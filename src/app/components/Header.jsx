import Link from 'next/link';

const Header = () => (

    <header className="w-[70%] mx-[171px] mt-[10pt]">
        <nav>
            <ol className="list-none flex justify-center gap-10 my-1.5 text-sm text-gray-800">
                <li>
                    <Link href="/home" className="text-gray-800 hover:text-black">Home</Link>
                </li>
            </ol>
        </nav>
    </header>
);

export default Header;