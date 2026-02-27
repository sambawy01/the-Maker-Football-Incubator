import React from "react";
import { Check, MapPin, Calendar, Star } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "../components/ui/Link";

const academies = [
  {
    name: "New Cairo",
    location: "Suli Golf Residence",
    image: "https://images.unsplash.com/photo-1722578460172-34a3c24687f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjByZXNpZGVudGlhbCUyMGNvbXBvdW5kJTIwZWd5cHR8ZW58MXx8fHwxNzcxMzM3NDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    days: "Sun, Tue, Thu",
    ages: "4 - 16 Years"
  },
  {
    name: "Maadi",
    location: "Victoria College Grounds",
    image: "https://images.unsplash.com/photo-1711187834800-0b50acb79725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWFkaSUyMGNhaXJvJTIwZ3JlZW4lMjBzdHJlZXRzfGVufDF8fHx8fDE3NzEzMzc0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    days: "Sun, Tue, Fri",
    ages: "4 - 14 Years"
  },
  {
    name: "New Administrative Capital",
    location: "Sports Complex",
    image: "https://images.unsplash.com/photo-1647108694450-67be2c64ba3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxpb3BvbGlzJTIwY2Fpcm8lMjBzdHJlZXQlMjBzY2VuZXxlbnwxfHx8fDE3NzEzMzc0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    days: "Mon, Wed, Sat",
    ages: "5 - 16 Years"
  },
];

export const Academies = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img 
            src="https://i.ibb.co/FqJgSqQP/GIO-6038.jpg"
            alt="Happy kids training"
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F172A]/70" />
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">TRAIN LIKE A MAKER</h1>
            <p className="text-white/90 text-xl leading-relaxed">
                Our paid academies bring The Maker’s world-class methodology to boys and girls aged 4 to 16 across Cairo.
            </p>
        </div>
      </section>

       <div className="bg-[#16A34A] py-6 text-white text-center font-medium">
            The Maker’s private academy follows the same programme as the incubator but runs on a pay-to-play model.
       </div>

      {/* Locations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <h2 className="text-[#0F172A] text-3xl font-bold mb-12 text-center">Our Locations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {academies.map((loc, i) => (
                    <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col">
                        <div className="h-56 relative">
                            <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#16A34A]">
                                Open for Registration
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-[#0F172A] mb-1">{loc.name}</h3>
                            <div className="text-gray-500 text-sm mb-6 flex items-center gap-1">
                                <MapPin size={14} /> {loc.location}
                            </div>
                            
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Calendar size={16} className="text-[#16A34A]" />
                                    {loc.days}
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Star size={16} className="text-[#16A34A]" />
                                    {loc.ages}
                                </div>
                            </div>
                            
                            <div className="mt-auto">
                                <Button className="w-full">Register Now</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
            <h2 className="text-[#0F172A] text-3xl font-bold mb-4 text-center">Training Packages</h2>
            <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">Flexible options designed to fit your schedule. All packages include uniform kit and evaluation reports.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Monthly", price: "2,500 EGP", features: ["12 Sessions / Month", "Basic Kit Included", "Monthly Evaluation"] },
                    { title: "Quarterly", price: "7,000 EGP", popular: true, features: ["36 Sessions", "Full Kit (Home & Away)", "Video Analysis Session", "10% Discount"] },
                    { title: "Annual", price: "25,000 EGP", features: ["Full Season Access", "Pro Kit Package", "Quarterly 1-on-1 Review", "Priority for Scholarship"] }
                ].map((plan, i) => (
                    <div key={i} className={`rounded-2xl p-8 border ${plan.popular ? "border-[#16A34A] bg-[#F0FDF4] relative shadow-lg scale-105" : "border-gray-200 bg-white"}`}>
                        {plan.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#16A34A] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                Recommended
                            </div>
                        )}
                        <h3 className="text-lg font-bold text-[#0F172A] mb-2">{plan.title}</h3>
                        <div className="text-3xl font-bold text-[#16A34A] mb-6">{plan.price}</div>
                        <ul className="space-y-4 mb-8">
                            {plan.features.map((f, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check size={16} className="text-[#16A34A] mt-0.5 shrink-0" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <Button variant={plan.popular ? "primary" : "outline-white"} className={`w-full ${!plan.popular ? "border-gray-300 text-gray-700 hover:bg-gray-50" : ""}`}>
                            Choose Plan
                        </Button>
                    </div>
                ))}
            </div>
            
             <div className="mt-16 p-8 border border-[#D97706] rounded-xl bg-yellow-50 max-w-2xl mx-auto text-center">
                 <h4 className="font-bold text-[#D97706] mb-2 uppercase tracking-widest text-sm">Scholarship Pathway</h4>
                 <p className="text-gray-700">Exceptional performers in our paid academies are regularly scouted by our technical directors and may be invited to join the fully-funded scholarship track.</p>
             </div>
        </div>
      </section>

       <section className="bg-[#0F172A] py-12 text-white text-center">
             <div className="max-w-4xl mx-auto px-4">
                 <h3 className="text-2xl font-bold mb-4">Also Introducing: The Maker Schools Programme</h3>
                 <p className="text-gray-400 mb-8">We bring our methodology to schools across Egypt.</p>
                 <Link to="/schools"><Button variant="outline-white">Learn About Schools Programme</Button></Link>
             </div>
       </section>
    </div>
  );
};
