import { Header } from "../app/components/header";
import { Buildings } from "solar-icon-set/buildinginfrastructure";
import { Sun } from "solar-icon-set/weather";
import { Chart } from "solar-icon-set/businessstatistic";
import { Star2 } from "solar-icon-set/astronomy";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900">
        <div className="container px-8 grid grid-cols-1 gap-4">
          <div className="relative z-10 font-black text-[100px] text-center text-white">
            Create Community Experiences with Seraphic.
          </div>
          <div className="relative z-10 mt-8 text-center text-lg text-gray-200">
            Seraphic is a suite of audience engagement tools. Explore more
            below!
          </div>

          {/* Cards  */}
          <section className="flex flex-col items-center space-y-20">
            <section className="grid grid-cols-4 items-center gap-4">
              <div id="card2" className="flex flex-col items-center space-y-4">
                <div className="px-6 py-6 border border-solid border-white rounded-full bg-slate-900">
                  <Buildings color="white" size={40} iconStyle="Bold" />
                </div>
                <h4 className="flex-grow text-gray-200">Responsive Design</h4>
              </div>
              <div id="card2" className="flex flex-col items-center space-y-4">
                <div className="px-6 py-6 border border-solid border-white rounded-full bg-slate-900">
                  <Sun color="white" size={40} iconStyle="Bold" />
                </div>
                <h4 className="flex-grow text-gray-200">Cloud Integration</h4>
              </div>
              <div id="card2" className="flex flex-col items-center space-y-4">
                <div className="px-6 py-6 border border-solid border-white rounded-full bg-slate-900">
                  <Chart color="white" size={40} iconStyle="Bold" />
                </div>
                <h4 className="flex-grow text-gray-200">Advanced Analytics</h4>
              </div>
              <div id="card2" className="flex flex-col items-center space-y-4">
                <div className="px-6 py-6 border border-solid border-white rounded-full bg-slate-900">
                  <Star2 color="white" size={40} iconStyle="Bold" />
                </div>
                <h4 className="flex-grow text-gray-200">
                  Customizable Interfaces
                </h4>
              </div>
            </section>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
