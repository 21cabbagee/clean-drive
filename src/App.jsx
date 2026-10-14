import React, { useState, useId } from 'react';
import { 
  Sparkles, 
  Building2, 
  Droplets, 
  Truck, 
  CheckCircle2, 
  Clock, 
  Users, 
  ArrowRight, 
  DollarSign, 
  Award, 
  MapPin, 
  ShieldCheck, 
  Percent,
  Layers,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import ParticlesCanvas from './components/ParticlesCanvas';
import OutcomeChart from './components/OutcomeChart';

const TOWERS = [
  { id: 'nema', name: 'NEMA San Francisco (Tower 1 & 2)', units: 754, committed: 8, target: 10, nextDate: 'Saturday, Oct 24', address: '8 10th St, SF' },
  { id: 'hawthorne', name: 'One Hawthorne Residences', units: 165, committed: 10, target: 10, nextDate: 'Sunday, Oct 25 (Unlocked!)', address: '1 Hawthorne St, SF' },
  { id: 'tehama', name: '33 Tehama High-Rise Suites', units: 403, committed: 6, target: 10, nextDate: 'Saturday, Oct 31', address: '33 Tehama St, SF' },
  { id: 'paramount', name: 'The Paramount Luxury Living', units: 486, committed: 7, target: 10, nextDate: 'Sunday, Nov 1', address: '680 Mission St, SF' }
];

const PACKAGES = [
  { id: 'sectional', title: 'Deep Sofa & Sectional Extraction', retailPrice: 340, groupPrice: 189, desc: '220°F industrial steam extraction, anti-allergen pre-spray, and rapid dry air-mover.' },
  { id: 'bedroom', title: 'Master Bedroom Wool/Carpet Deep Steam', retailPrice: 190, groupPrice: 99, desc: 'High-lift vacuum agitation, spot stain removal, and fiber-safe neutralization.' },
  { id: 'dining', title: 'Dining Chair Set (Up to 6 Chairs)', retailPrice: 160, groupPrice: 85, desc: 'Micro-fiber and fabric upholstery deep extraction with scotchgard protection.' },
  { id: 'mattress', title: 'King Mattress Sanitization & Extraction', retailPrice: 220, groupPrice: 119, desc: 'Hospital-grade UV-C pass, steam extraction for dust mites and dead skin.' }
];

export default function App() {
  const selectedTowerId = useId();
  const residentNameId = useId();
  const unitNumberId = useId();
  const selectedPackageId = useId();
  const elevatorSlotId = useId();

  // State
  const [selectedTower, setSelectedTower] = useState(TOWERS[0]);
  const [cart, setCart] = useState({
    resident: 'Alexander Sterling',
    unit: 'Unit 2204',
    package: PACKAGES[0],
    slot: '11:00 AM'
  });

  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);

  // CAB Modal
  const [isCabModalOpen, setIsCabModalOpen] = useState(false);
  const [cabSubmitted, setCabSubmitted] = useState(false);
  const [cabForm, setCabForm] = useState({
    buildingName: '',
    hoaManager: '',
    email: '',
    unitCount: '300-600 Condos'
  });

  const isTipped = selectedTower.committed >= selectedTower.target;
  const progressPercent = Math.min(100, (selectedTower.committed / selectedTower.target) * 100);

  const handlePledge = (e) => {
    e.preventDefault();
    setPledgeSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCabSubmit = (e) => {
    e.preventDefault();
    setCabSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Banner: CAB Announcement */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-sky-950 border-b border-cyan-500/30 px-4 py-2.5 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold text-cyan-300">Customer Advisory Board (CAB) For High-Rise HOAs:</span>
            <span className="text-slate-300">Join 10 premier residential towers hosting CleanDrive with $0 building dispatch fees and 10% HOA amenity kickback.</span>
          </div>
          <button 
            onClick={() => setIsCabModalOpen(true)}
            className="px-3 py-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-full transition-all shadow-sm hover:scale-105"
          >
            Claim HOA Board Seat →
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-slate-950 font-black text-xl">
              💧
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-tight">CleanDrive</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Group-Buy Extraction</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-none">High-Rise Carpet & Sofa Extraction Collective</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
            <a href="#tower-tipping" className="hover:text-cyan-400 transition-colors">Tower Drive Status</a>
            <a href="#packages" className="hover:text-cyan-400 transition-colors">Extraction Menu</a>
            <a href="#logistics" className="hover:text-cyan-400 transition-colors">Truck-Mount Logistics</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsCabModalOpen(true)}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold text-xs rounded-lg transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" />
              <span>Join CAB</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ParticlesCanvas color="14, 165, 233" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-xs text-sky-300 font-mono shadow-lg shadow-sky-950/40">
            <Truck className="w-4 h-4 text-sky-400" />
            <span>Industrial 220°F Steam Rig Dispatched • 10-Unit Collective Tipping Point • 45% Resident Savings</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            High-Rise Apartment Tower <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">Deep Cleaning & Extraction Collective</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Industrial truck-mounted steam extraction machines cost $100+ to dispatch to a single high-rise condo. CleanDrive pools 10 apartments in your tower for a single-day deep cleaning drive, bringing truck-mount power up the service elevator at 45% off retail.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="#tower-tipping" 
              className="px-6 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-xl shadow-sky-500/30 flex items-center gap-2 hover:scale-[1.02]"
            >
              <span>Join Your Tower's Drive</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#packages" 
              className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-sky-500/30 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 hover:border-sky-400/60"
            >
              <Droplets className="w-4 h-4 text-sky-400" />
              <span>View Extraction Services</span>
            </a>
          </div>

          {/* Market TAM & Metrics */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-slate-900/80 border border-sky-500/20 rounded-xl p-4 backdrop-blur-md">
              <div className="text-2xl font-black text-sky-400">$787M</div>
              <div className="text-xs text-slate-400 font-medium">High-Rise Cleaning Drive TAM</div>
            </div>
            <div className="bg-slate-900/80 border border-white/10 rounded-xl p-4 backdrop-blur-md">
              <div className="text-2xl font-black text-white">45%</div>
              <div className="text-xs text-slate-400 font-medium">Average Resident Savings</div>
            </div>
            <div className="bg-slate-900/80 border border-sky-500/20 rounded-xl p-4 backdrop-blur-md">
              <div className="text-2xl font-black text-sky-400">10 Units</div>
              <div className="text-xs text-slate-400 font-medium">Automatic Tipping Quota</div>
            </div>
            <div className="bg-slate-900/80 border border-white/10 rounded-xl p-4 backdrop-blur-md">
              <div className="text-2xl font-black text-white">220°F</div>
              <div className="text-xs text-slate-400 font-medium">True Steam Heat Extraction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Julien Bek $1:$6 Sequoia Framework + Bklit UI Outcome Engine */}
      <section className="px-4 sm:px-6 lg:px-8">
        <OutcomeChart onCtaClick={() => setIsCabModalOpen(true)} />
      </section>

      {/* Feature 1: Tipping Point Engine */}
      <section id="tower-tipping" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Group-Buy Quota System</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Residential Tower Extraction Drives
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOWERS.map((tower) => (
                <button
                  key={tower.id}
                  onClick={() => setSelectedTower(tower)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedTower.id === tower.id
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {tower.name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Tipping Status & Form */}
            <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedTower.name}</h3>
                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{selectedTower.address}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">Scheduled Drive Date:</span>
                  <span className="text-xs font-bold text-cyan-300">{selectedTower.nextDate}</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold text-slate-300">
                    Tower Drive Quota: <strong className="text-white">{selectedTower.committed} of {selectedTower.target} Units Pledged</strong>
                  </span>
                  <span className={`text-xs font-bold ${isTipped ? 'text-emerald-400' : 'text-cyan-400'}`}>
                    {isTipped ? '✓ Drive Confirmed & Unlocked' : `${selectedTower.target - selectedTower.committed} more pledges needed to unlock 45% discount`}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${isTipped ? 'bg-emerald-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="text-[11px] text-slate-400">
                  Zero risk pledge: Your card is authorized for <strong>$0</strong> today. Payment is only processed if the 10-unit minimum tipping threshold is reached before dispatch.
                </div>
              </div>

              {/* Booking Pledge Form */}
              <form onSubmit={handlePledge} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={residentNameId} className="block text-xs font-semibold text-slate-300 mb-1">
                      Resident Name
                    </label>
                    <input 
                      id={residentNameId}
                      type="text" 
                      value={cart.resident}
                      onChange={(e) => setCart({ ...cart, resident: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={unitNumberId} className="block text-xs font-semibold text-slate-300 mb-1">
                      Tower Unit / Suite #
                    </label>
                    <input 
                      id={unitNumberId}
                      type="text" 
                      value={cart.unit}
                      onChange={(e) => setCart({ ...cart, unit: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={selectedPackageId} className="block text-xs font-semibold text-slate-300 mb-1">
                      Extraction Package
                    </label>
                    <select 
                      id={selectedPackageId}
                      value={cart.package.id}
                      onChange={(e) => {
                        const p = PACKAGES.find(x => x.id === e.target.value);
                        if (p) setCart({ ...cart, package: p });
                      }}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                    >
                      {PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.title} (${pkg.groupPrice})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={elevatorSlotId} className="block text-xs font-semibold text-slate-300 mb-1">
                      Service Elevator Arrival Slot
                    </label>
                    <select 
                      id={elevatorSlotId}
                      value={cart.slot}
                      onChange={(e) => setCart({ ...cart, slot: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="09:00 AM">09:00 AM - 10:30 AM (Morning Slot)</option>
                      <option value="11:00 AM">11:00 AM - 12:30 PM (Midday Slot)</option>
                      <option value="01:30 PM">01:30 PM - 03:00 PM (Afternoon Slot)</option>
                      <option value="03:30 PM">03:30 PM - 05:00 PM (Late Afternoon)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 mt-2"
                >
                  <Droplets className="w-4 h-4" />
                  <span>Pledge Collective Extraction Slot (${cart.package.groupPrice})</span>
                </button>
              </form>
            </div>

            {/* Right: Pricing Arbitrage & Confirmation */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold">Drive Summary</span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                  45% Volume Discount
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white">{cart.package.title}</div>
                  <p className="text-xs text-slate-400">{cart.package.desc}</p>
                  <div className="flex justify-between items-baseline pt-2 border-t border-slate-800/80 text-xs">
                    <span className="text-slate-400">Solo Contractor Retail Rate:</span>
                    <span className="line-through text-slate-500">${cart.package.retailPrice}.00</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs font-bold">
                    <span className="text-cyan-400">CleanDrive Group Rate:</span>
                    <span className="text-xl text-white">${cart.package.groupPrice}.00</span>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-semibold pt-1">
                    You save ${cart.package.retailPrice - cart.package.groupPrice}.00 on this drive.
                  </div>
                </div>

                <div className="text-xs space-y-2 text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Resident:</span>
                    <span className="font-medium text-white">{cart.resident} ({cart.unit})</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Building:</span>
                    <span className="font-medium text-white">{selectedTower.name.split(' (')[0]}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Service Slot:</span>
                    <span className="font-medium text-cyan-300">{cart.slot} ({selectedTower.nextDate})</span>
                  </div>
                </div>

                {pledgeSubmitted && (
                  <div className="bg-cyan-950/40 border border-cyan-500/40 rounded-xl p-3.5 text-xs text-cyan-300 text-center animate-fadeIn">
                    ✓ Pledge registered for {cart.unit}! Drive reaches quorum in 2 more units. Confirmation text sent.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Equipment & Logistics Breakdown */}
      <section id="logistics" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Industrial Technology</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Truck-Mount Steam Power in a High-Rise
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Why consumer rental machines fail and why high-pressure truck extraction delivers 10x cleaner fibers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="text-2xl">🔥</div>
              <h3 className="text-base font-bold text-white">220°F Heat Sanitation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Kills 99.9% of bacteria, dust mites, and microscopic allergens without toxic lingering chemical residues.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="text-2xl">⚡</div>
              <h3 className="text-base font-bold text-white">High-Lift Vacuum Lift</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Industrial vacuum extraction pulls water from deep padding, enabling full dry times in under 3 hours instead of 24.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="text-2xl">🏢</div>
              <h3 className="text-base font-bold text-white">Service Elevator Protocol</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Padded wall covers, floor tarps in common corridors, and zero lobby disturbance coordinated directly with building security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Commercial Tiers</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Building Amenities & Commercial Drives
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Turn an expensive contractor hassle into an acclaimed resident perk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Resident Tier */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-base font-bold text-white">Resident Group-Buy</div>
                <div className="text-xs text-slate-400 mt-1">For condo owners & tenants</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">$189</span>
                  <span className="text-xs text-slate-400">/sectional sofa (45% off)</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Zero truck roll dispatch surcharge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Fast 3-hour rapid dry guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Scotchgard protective coating included</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => setIsCabModalOpen(true)}
                className="mt-8 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Join Next Tower Drive
              </button>
            </div>

            {/* HOA Facility Partner (Highlighted) */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between relative shadow-xl shadow-cyan-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-slate-950 text-[10px] font-black uppercase tracking-wider rounded-full">
                Most Popular
              </div>
              <div>
                <div className="text-base font-bold text-white">HOA Facility Partner</div>
                <div className="text-xs text-slate-400 mt-1">For residential boards & property managers</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-cyan-400">$0</span>
                  <span className="text-xs text-slate-400">fee to HOA (+10% amenity kickback)</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Quarterly scheduled building extraction days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Complimentary lobby rug & clubhouse couch cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>$5M commercial general liability coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Automated resident email portal & flyers</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => setIsCabModalOpen(true)}
                className="mt-8 w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-cyan-500/20"
              >
                Join CAB for HOA ($0 Setup)
              </button>
            </div>

            {/* Portfolio Enterprise */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-base font-bold text-white">Commercial Portfolio</div>
                <div className="text-xs text-slate-400 mt-1">For multi-building management firms</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">$499</span>
                  <span className="text-xs text-slate-400">/month (Enterprise coordination)</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Turnover apartment move-out deep clean fleet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Dedicated property operations account rep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct Yardi / RealPage billing integration</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => setIsCabModalOpen(true)}
                className="mt-8 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Contact Portfolio Desk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-10 px-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">CleanDrive</span>
            <span>• High-Rise Apartment Tower Deep Cleaning & Extraction Collective</span>
          </div>
          <div>
            Industrial steam power unlocked through collective building density.
          </div>
        </div>
      </footer>

      {/* CAB 10-Member Modal */}
      {isCabModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setIsCabModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            {!cabSubmitted ? (
              <form onSubmit={handleCabSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Award className="w-5 h-5" />
                  <span>CleanDrive HOA Advisory Board (CAB)</span>
                </div>
                <h3 className="text-xl font-black text-white">Join 10 Founding Residential Towers</h3>
                <p className="text-xs text-slate-400">
                  Host an exclusive CleanDrive in your building with zero HOA fees, complimentary lobby steam sanitization, and 10% building amenity revenue kickback.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <label htmlFor="building-name" className="block text-xs font-semibold text-slate-300 mb-1">Building / HOA Name</label>
                    <input 
                      id="building-name"
                      type="text" 
                      placeholder="e.g. NEMA San Francisco"
                      value={cabForm.buildingName}
                      onChange={(e) => setCabForm({ ...cabForm, buildingName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="hoa-manager" className="block text-xs font-semibold text-slate-300 mb-1">HOA Board / General Manager Name</label>
                    <input 
                      id="hoa-manager"
                      type="text" 
                      placeholder="e.g. Marcus Wright"
                      value={cabForm.hoaManager}
                      onChange={(e) => setCabForm({ ...cabForm, hoaManager: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="work-email" className="block text-xs font-semibold text-slate-300 mb-1">Official Work Email</label>
                    <input 
                      id="work-email"
                      type="email" 
                      placeholder="m.wright@nemasf.com"
                      value={cabForm.email}
                      onChange={(e) => setCabForm({ ...cabForm, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/25"
                >
                  Reserve CAB Spot for Tower
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-black text-white">Tower Drive Pilot Reserved</h3>
                <p className="text-xs text-slate-300">
                  Welcome to CleanDrive CAB, <strong className="text-white">{cabForm.hoaManager}</strong>. We will coordinate commercial elevator padding and dates for <span className="text-cyan-400">{cabForm.buildingName}</span>.
                </p>
                <button 
                  onClick={() => { setIsCabModalOpen(false); setCabSubmitted(false); }}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
