import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Notif from '@/components/Notif'
import Hero from '@/components/Hero'


export default async function Page() {
    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div>
            {/* <Notif /> */}
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}