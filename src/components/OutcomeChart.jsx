import React, { useState } from 'react';
import { TrendingUp, Droplets, Building2, Sparkles, DollarSign, Clock, Users, ShieldCheck } from 'lucide-react';

/**
 * OutcomeChart for CleanDrive (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $340 individual diesel truck rolls & travel dispatch fees ($6 services layer)
 * with High-Rise Collective Steam Extraction Autopilot ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "High-Rise Collective Extraction Routing",
  defaultMonthlyUnits = 16, // units cleaned per month
  onCtaClick
}) {
  const [units, setUnits] = useState(defaultMonthlyUnits);

  // Legacy individual dispatch: $340 retail sectional/carpet steam + $65 parking & truck travel surcharge
  const legacyServicesCost = units * 340;
  // CleanDrive group batching: $189 per unit
  const collectiveCost = units * 189;
  const netResidentSavings = legacyServicesCost - collectiveCost;
  const savingsPercent = Math.round(((legacyServicesCost - collectiveCost) / legacyServicesCost) * 100);

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((collectiveCost / maxCost) * 100), 12);

  return (
    <div className="relative rounded-2xl border border-sky-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-sky-500/40 text-sky-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs Diesel Truck-Roll Overhead ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            High-Rise Collective Economics: <span className="text-sky-400">{savingsPercent}% Transit Markup Slashed</span>
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            Commercial carpet cleaning vans charge huge minimums because 60% of their day is spent fighting urban traffic and parking tickets. CleanDrive batches high-rises on dedicated Saturdays with commercial elevator routing.
          </p>
        </div>

        <div className="text-right bg-slate-900/80 border border-sky-500/30 rounded-xl p-3 px-4 min-w-[200px]">
          <span className="text-[11px] text-slate-400 block font-medium">Monthly Building Spend Saved</span>
          <span className="text-2xl md:text-3xl font-black text-sky-400">
            ${netResidentSavings.toLocaleString()}
          </span>
          <span className="text-[10px] text-sky-300/80 flex items-center justify-end gap-1 font-semibold font-mono">
            <TrendingUp className="w-3 h-3" /> Zero Truck Dispatch Delays
          </span>
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="py-6 border-b border-white/10">
        <div className="flex items-center justify-between text-sm mb-3">
          <label className="text-slate-300 font-semibold flex items-center gap-2">
            <Building2 className="w-4 h-4 text-sky-400" />
            Condo Units Cleaned on Building CleanDrive Day:
          </label>
          <span className="text-base font-bold text-white bg-slate-900 px-3 py-1 rounded-lg border border-sky-500/30 font-mono">
            {units} Units / mo (${(legacyServicesCost * 12).toLocaleString()}/yr Retail Spend)
          </span>
        </div>
        <input 
          type="range" 
          min={5} 
          max={60} 
          step={5}
          value={units}
          onChange={(e) => setUnits(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>5 Units (Single Floor Batch)</span>
          <span>16 Units (Bi-Weekly CleanDrive Day)</span>
          <span>60+ Units (Multi-Tower High-Rise Portfolio)</span>
        </div>
      </div>

      {/* Bklit UI Visual Comparison Chart & Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
        {/* SVG Visual Bars */}
        <div className="md:col-span-5 bg-slate-900 rounded-xl p-5 border border-white/10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between font-mono">
            <span>Spend Efficiency Comparison</span>
            <span className="text-[10px] text-slate-500">Live Logistics Simulation</span>
          </div>

          <div className="space-y-4">
            {/* Legacy Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Solo Diesel Van Dispatch ($6 Layer)
                </span>
                <span className="font-mono font-bold text-rose-300">${legacyServicesCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-rose-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-rose-600 to-sky-600 transition-all duration-300 rounded-lg"
                  style={{ width: `${legacyBarHeight}%` }}
                />
              </div>
            </div>

            {/* Autonomous Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-sky-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  CleanDrive Loading Dock Autopilot ($1 Layer)
                </span>
                <span className="font-mono font-bold text-sky-300">${collectiveCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-sky-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-sky-500 to-blue-500 transition-all duration-300 rounded-lg shadow-lg shadow-sky-500/30"
                  style={{ width: `${autoBarHeight}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Annual Net Resident Savings:</span>
            <span className="text-sm font-bold text-sky-400">+${(netResidentSavings * 12).toLocaleString()}</span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
              <Droplets className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">220°F Hospital-Grade Steam Extraction</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Industrial deep steam removes 99.4% of allergens, dust mites, and pet stains with zero chemical residue and fast 2-hour dry times.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Loading Dock & Freight Elevator Pre-Clearance</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                We coordinate directly with building HOA management and security for insured freight access and elevator padding. Zero resident coordination burden.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">45% Group Density Arbitrage</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Because technicians don't have to drive 40 miles between jobs, the fuel, time, and parking savings are passed directly back to residents in cash.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
