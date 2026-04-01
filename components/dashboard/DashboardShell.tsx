"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard, Droplets, Truck, Building2, FlaskConical,
  BarChart3, Bell, Settings, Menu, X, ChevronRight, TrendingUp,
  TrendingDown, AlertCircle, CheckCircle2, Clock, Wind, Activity,
  Users, ArrowLeft, Search, RefreshCw, Plus, Filter, Download,
  MapPin, Thermometer, Zap, Shield, Package, Eye, ChevronDown,
} from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { label:"Units Available",   value:"18,420", sub:"In cold storage",       trend:+4.2,  color:"#22c55e", icon:Droplets,  delta:"+740 today"  },
  { label:"Active Deliveries", value:"12",     sub:"In transit now",        trend:+2,    color:"#2F80ED", icon:Truck,     delta:"+3 last hour" },
  { label:"Pending Requests",  value:"7",      sub:"Awaiting dispatch",     trend:-2,    color:"#C9A84C", icon:Clock,     delta:"2 critical"   },
  { label:"Drones in Flight",  value:"3",      sub:"Active missions",       trend:0,     color:"#CC0000", icon:Wind,      delta:"Lagos metro"  },
  { label:"Donors Today",      value:"284",    sub:"Registered collections",trend:+12.4, color:"#9333EA", icon:Users,     delta:"+31 vs avg"   },
  { label:"NAT Batches",       value:"6",      sub:"Processing now",        trend:0,     color:"#0EA5E9", icon:FlaskConical,delta:"~4hr remaining"},
  { label:"Hospitals Online",  value:"147",    sub:"Connected to OS",       trend:+5,    color:"#C9A84C", icon:Building2, delta:"34 pending"   },
  { label:"System Uptime",     value:"99.9%",  sub:"Last 30 days",          trend:+0.1,  color:"#22c55e", icon:Shield,    delta:"0 incidents"  },
];

const DELIVERIES = [
  { id:"DLV-0042", hospital:"Lagos Island General",    blood:"O+",  units:4, eta:"12 min",  status:"In Flight",   mode:"Drone",  priority:"Critical", hub:"VI" },
  { id:"DLV-0041", hospital:"LASUTH Ikeja",            blood:"A-",  units:2, eta:"28 min",  status:"In Transit",  mode:"Ground", priority:"Urgent",   hub:"IK" },
  { id:"DLV-0040", hospital:"Lagos University Hosp",   blood:"B+",  units:6, eta:"Arrived", status:"Delivered",   mode:"Ground", priority:"Standard", hub:"IK" },
  { id:"DLV-0039", hospital:"St. Nicholas Hospital",   blood:"AB+", units:1, eta:"Arrived", status:"Delivered",   mode:"Drone",  priority:"Critical", hub:"VI" },
  { id:"DLV-0038", hospital:"Reddington Hospital",     blood:"O-",  units:3, eta:"Arrived", status:"Delivered",   mode:"Ground", priority:"Urgent",   hub:"LK" },
  { id:"DLV-0037", hospital:"Eko Hospital",            blood:"A+",  units:5, eta:"44 min",  status:"Dispatching", mode:"Ground", priority:"Standard", hub:"SU" },
  { id:"DLV-0036", hospital:"Zenith Medical",          blood:"B-",  units:2, eta:"19 min",  status:"In Transit",  mode:"Drone",  priority:"Critical", hub:"AP" },
];

const BLOOD_INVENTORY = [
  { type:"O+",  units:5840, cap:87, status:"Good",     trend:+2  },
  { type:"A+",  units:3910, cap:72, status:"Good",     trend:-1  },
  { type:"B+",  units:2740, cap:58, status:"Moderate", trend:+5  },
  { type:"AB+", units:980,  cap:41, status:"Low",      trend:-3  },
  { type:"O-",  units:2100, cap:65, status:"Good",     trend:+8  },
  { type:"A-",  units:1230, cap:38, status:"Low",      trend:-4  },
  { type:"B-",  units:890,  cap:30, status:"Critical", trend:-9  },
  { type:"AB-", units:730,  cap:28, status:"Critical", trend:-6  },
];

const HUBS = [
  { id:"HUB-01", name:"Victoria Island", short:"VI", units:6240, temp:"2.1°C", drones:4, droneActive:2, capacity:85, status:"Operational", lat:6.43, lng:3.42 },
  { id:"HUB-02", name:"Ikeja",           short:"IK", units:4810, temp:"2.0°C", drones:3, droneActive:1, capacity:71, status:"Operational", lat:6.60, lng:3.35 },
  { id:"HUB-03", name:"Surulere",        short:"SU", units:3920, temp:"2.4°C", drones:2, droneActive:0, capacity:66, status:"Warning",     lat:6.50, lng:3.36 },
  { id:"HUB-04", name:"Lekki",           short:"LK", units:2380, temp:"2.0°C", drones:3, droneActive:1, capacity:44, status:"Operational", lat:6.44, lng:3.55 },
  { id:"HUB-05", name:"Apapa",           short:"AP", units:1070, temp:"2.1°C", drones:1, droneActive:0, capacity:21, status:"Operational", lat:6.45, lng:3.36 },
];

const ALERTS = [
  { level:"critical", msg:"B- stock critically low — automatic reorder triggered",     time:"2m ago",  id:"ALT-089" },
  { level:"critical", msg:"AB- approaching minimum threshold (730 units remaining)",   time:"8m ago",  id:"ALT-088" },
  { level:"warning",  msg:"Hub 3 (Surulere) cold room: temp variance +0.4°C detected", time:"14m ago", id:"ALT-087" },
  { level:"info",     msg:"DLV-0042 drone departure confirmed — Lagos Island target",  time:"17m ago", id:"ALT-086" },
  { level:"success",  msg:"NAT batch #B-20260301-07 cleared — 240 units added",        time:"31m ago", id:"ALT-085" },
  { level:"info",     msg:"Hub 2 (Ikeja) drone fleet recharged — 3 units ready",       time:"45m ago", id:"ALT-084" },
];

const SCREENING = [
  { batch:"NAT-2026-0312",  type:"Whole Blood",  units:120, started:"09:15",  eta:"13:15",  status:"Processing", pct:62, lab:"Lab A" },
  { batch:"NAT-2026-0311",  type:"Platelets",    units:48,  started:"07:00",  eta:"11:00",  status:"Complete",   pct:100,lab:"Lab B" },
  { batch:"NAT-2026-0310",  type:"Plasma",       units:200, started:"06:30",  eta:"10:30",  status:"Complete",   pct:100,lab:"Lab A" },
  { batch:"NAT-2026-0309",  type:"Whole Blood",  units:80,  started:"10:00",  eta:"14:00",  status:"Queued",     pct:0,  lab:"Lab C" },
];

const DONORS = [
  { id:"D-4821", name:"Adebayo Okafor",   blood:"O+",  date:"Today 08:45",  status:"Completed", vol:"450ml" },
  { id:"D-4820", name:"Chinwe Eze",       blood:"A-",  date:"Today 08:30",  status:"Completed", vol:"450ml" },
  { id:"D-4819", name:"Musa Ibrahim",     blood:"B+",  date:"Today 08:15",  status:"Completed", vol:"450ml" },
  { id:"D-4818", name:"Funmi Adeyemi",    blood:"AB+", date:"Today 07:50",  status:"Completed", vol:"450ml" },
  { id:"D-4817", name:"Tunde Okonkwo",    blood:"O-",  date:"Today 07:30",  status:"Deferred",  vol:"—"     },
  { id:"D-4816", name:"Ngozi Nwosu",      blood:"A+",  date:"Today 07:10",  status:"Completed", vol:"450ml" },
];

const HOSPITALS = [
  { name:"Cedarville Specialist Hospital", area:"Victoria Island", requests:18, lastOrder:"15m ago", status:"Active", tier:"Level 1" },
  { name:"Evercare Hospital",              area:"Lekki",           requests:15, lastOrder:"28m ago", status:"Active", tier:"Level 1" },
  { name:"St. Nicholas Hospital",         area:"Lagos Island",    requests:12, lastOrder:"45m ago", status:"Active", tier:"Level 1" },
  { name:"LUTH",                          area:"Idi-Araba",       requests:11, lastOrder:"1h ago",  status:"Active", tier:"Level 1" },
  { name:"Lagos Island General Hospital", area:"Lagos Island",    requests:9,  lastOrder:"1h ago",  status:"Active", tier:"Level 1" },
  { name:"LASUTH",                        area:"Ikeja",           requests:8,  lastOrder:"2h ago",  status:"Active", tier:"Level 1" },
  { name:"Reddington Hospital",           area:"Victoria Island", requests:6,  lastOrder:"3h ago",  status:"Active", tier:"Level 2" },
  { name:"Eko Hospital",                  area:"Ikeja",           requests:4,  lastOrder:"4h ago",  status:"Active", tier:"Level 2" },
];

const WEEKLY_DATA = [
  { day:"Mon", deliveries:42, donations:198, units:1240 },
  { day:"Tue", deliveries:38, donations:221, units:1180 },
  { day:"Wed", deliveries:55, donations:267, units:1560 },
  { day:"Thu", deliveries:61, donations:234, units:1820 },
  { day:"Fri", deliveries:48, donations:289, units:1440 },
  { day:"Sat", deliveries:33, donations:312, units:990  },
  { day:"Sun", deliveries:27, donations:284, units:810  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
const STATUS_STYLES: Record<string, {bg:string; color:string}> = {
  "In Flight":   {bg:"rgba(47,128,237,.15)",  color:"#2F80ED"},
  "In Transit":  {bg:"rgba(201,168,76,.15)",  color:"#C9A84C"},
  "Delivered":   {bg:"rgba(34,197,94,.12)",   color:"#22c55e"},
  "Dispatching": {bg:"rgba(138,3,3,.15)",     color:"#ff4d4d"},
  "Operational": {bg:"rgba(34,197,94,.1)",    color:"#22c55e"},
  "Warning":     {bg:"rgba(201,168,76,.15)",  color:"#C9A84C"},
  "Offline":     {bg:"rgba(255,255,255,.06)", color:"#7A7A7A"},
  "Good":        {bg:"rgba(34,197,94,.1)",    color:"#22c55e"},
  "Moderate":    {bg:"rgba(201,168,76,.1)",   color:"#C9A84C"},
  "Low":         {bg:"rgba(138,3,3,.12)",     color:"#ff6b6b"},
  "Critical":    {bg:"rgba(138,3,3,.2)",      color:"#ff4d4d"},
  "Processing":  {bg:"rgba(47,128,237,.12)",  color:"#2F80ED"},
  "Complete":    {bg:"rgba(34,197,94,.1)",    color:"#22c55e"},
  "Queued":      {bg:"rgba(255,255,255,.06)", color:"rgba(255,255,255,.4)"},
  "Active":      {bg:"rgba(34,197,94,.1)",    color:"#22c55e"},
  "Completed":   {bg:"rgba(34,197,94,.1)",    color:"#22c55e"},
  "Deferred":    {bg:"rgba(138,3,3,.12)",     color:"#ff6b6b"},
  "Critical Req":{bg:"rgba(138,3,3,.15)",     color:"#ff4d4d"},
};

function Badge({status}: {status:string}) {
  const s = STATUS_STYLES[status] ?? {bg:"rgba(255,255,255,.06)", color:"rgba(255,255,255,.5)"};
  return (
    <span style={{
      fontSize:9, letterSpacing:".1em", textTransform:"uppercase",
      fontFamily:"var(--font-mono)", padding:"3px 9px",
      background:s.bg, color:s.color,
      border:`1px solid ${s.color}30`, whiteSpace:"nowrap",
    }}>{status}</span>
  );
}

function AlertDot({level}:{level:string}) {
  const colors: Record<string,string> = {critical:"#ff4d4d", warning:"#C9A84C", success:"#22c55e", info:"#2F80ED"};
  const c = colors[level] ?? "#fff";
  if (level === "critical") return <AlertCircle size={13} style={{color:c, flexShrink:0}}/>;
  if (level === "warning")  return <AlertCircle size={13} style={{color:c, flexShrink:0}}/>;
  if (level === "success")  return <CheckCircle2 size={13} style={{color:c, flexShrink:0}}/>;
  return <Activity size={13} style={{color:c, flexShrink:0}}/>;
}

// Mini bar chart for weekly analytics
function BarChart({data, field, color}: {data:typeof WEEKLY_DATA; field:"deliveries"|"donations"|"units"; color:string}) {
  const max = Math.max(...data.map(d => d[field]));
  return (
    <div style={{display:"flex", alignItems:"flex-end", gap:6, height:80}}>
      {data.map(d => (
        <div key={d.day} style={{flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4}}>
          <div style={{
            width:"100%", height: (d[field]/max)*68,
            background: `linear-gradient(to top, ${color}dd, ${color}66)`,
            borderRadius:2, minHeight:4,
            transition:"height .5s ease",
          }}/>
          <span style={{fontSize:8, color:"rgba(255,255,255,.3)", fontFamily:"var(--font-mono)"}}>{d.day}</span>
        </div>
      ))}
    </div>
  );
}

// ── Sidebar nav ───────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  { label:"MAIN", items:[
    {icon:LayoutDashboard, label:"Overview",        id:"overview"},
    {icon:Droplets,        label:"Blood Inventory", id:"inventory"},
    {icon:FlaskConical,    label:"NAT Screening",   id:"screening"},
  ]},
  { label:"LOGISTICS", items:[
    {icon:Truck,    label:"Deliveries",  id:"deliveries"},
    {icon:Wind,     label:"Drone Fleet", id:"drones"},
    {icon:MapPin,   label:"Hub Network", id:"hubs"},
  ]},
  { label:"NETWORK", items:[
    {icon:Building2, label:"Hospitals", id:"hospitals"},
    {icon:Users,     label:"Donors",    id:"donors"},
  ]},
  { label:"INSIGHTS", items:[
    {icon:BarChart3, label:"Analytics", id:"analytics"},
  ]},
];

// ── Clock component ───────────────────────────────────────────────────────────
function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US", {hour12:false, hour:"2-digit", minute:"2-digit", second:"2-digit"}));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono" style={{fontSize:15, color:"rgba(255,255,255,.5)", letterSpacing:".1em"}}>{time}</span>;
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function DashboardShell() {
  const [sidebarOpen, setSidebarOpen]   = useState(false);
  const [activeTab, setActiveTab]       = useState("overview");
  const [searchVal, setSearchVal]       = useState("");
  const [alertsRead, setAlertsRead]     = useState(false);
  const [refreshing, setRefreshing]     = useState(false);
  const [chartMetric, setChartMetric]   = useState<"deliveries"|"donations"|"units">("deliveries");

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1200);
  };

  const activeItem = NAV_SECTIONS.flatMap(s => s.items).find(i => i.id === activeTab);
  const unreadAlerts = alertsRead ? 0 : ALERTS.filter(a => a.level === "critical").length;

  return (
    <div style={{display:"flex", height:"100vh", background:"#13132A", fontFamily:"var(--font-body)", color:"white", overflow:"hidden"}}>

      {/* ── Mobile overlay ─────────────────────────────────────── */}
      {sidebarOpen && (
        <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,.7)", zIndex:40}} onClick={()=>setSidebarOpen(false)}/>
      )}

      {/* ── SIDEBAR ────────────────────────────────────────────── */}
      <aside style={{
        width:220, flexShrink:0,
        background:"#1A1A35",
        borderRight:"1px solid rgba(255,255,255,.05)",
        display:"flex", flexDirection:"column",
        position:"fixed", top:0, left:0, height:"100%", zIndex:50,
        transform: sidebarOpen ? "translateX(0)" : undefined,
        transition:"transform .3s",
      }} className="sidebar">

        {/* Logo */}
        <div style={{padding:"18px 16px", borderBottom:"1px solid rgba(255,255,255,.05)", display:"flex", alignItems:"center", gap:10}}>
          <div style={{width:34, height:34, borderRadius:"50%", overflow:"hidden", background:"#000", position:"relative", flexShrink:0}}>
            <Image src="/logo-new.jpg" alt="CrimsonWings" fill style={{objectFit:"contain"}}/>
          </div>
          <div style={{flex:1, minWidth:0}}>
            <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:14, color:"#fff", lineHeight:1.2}}>
              Crimson<span style={{color:"#CC0000"}}>Wings</span>
            </div>
            <div style={{fontFamily:"var(--font-mono)", fontSize:7, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.25)", marginTop:2}}>
              Operations OS · v2.0
            </div>
          </div>
          <button onClick={()=>setSidebarOpen(false)} style={{background:"none", border:"none", color:"rgba(255,255,255,.3)", cursor:"pointer", display:"none"}} className="sidebar-close">
            <X size={14}/>
          </button>
        </div>

        {/* System status */}
        <div style={{margin:"10px 12px 4px", padding:"7px 10px", background:"rgba(34,197,94,.06)", border:"1px solid rgba(34,197,94,.12)", display:"flex", alignItems:"center", gap:7}}>
          <span style={{width:6, height:6, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 6px #22c55e", flexShrink:0, animation:"blink 2s ease-in-out infinite"}}/>
          <span style={{fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.4)"}}>All Systems Active</span>
        </div>

        {/* Nav */}
        <nav style={{flex:1, overflowY:"auto", padding:"8px 8px"}}>
          {NAV_SECTIONS.map(section => (
            <div key={section.label} style={{marginBottom:8}}>
              <div style={{fontFamily:"var(--font-mono)", fontSize:7, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.2)", padding:"8px 10px 4px"}}>
                {section.label}
              </div>
              {section.items.map(item => {
                const active = activeTab === item.id;
                return (
                  <button key={item.id} onClick={()=>{setActiveTab(item.id); setSidebarOpen(false);}}
                    style={{
                      width:"100%", display:"flex", alignItems:"center", gap:9,
                      padding:"9px 10px", marginBottom:1, border:"none", cursor:"pointer",
                      background: active ? "rgba(138,3,3,.18)" : "transparent",
                      borderLeft: active ? "2px solid #CC0000" : "2px solid transparent",
                      color: active ? "#fff" : "rgba(255,255,255,.45)",
                      borderRadius:"0 4px 4px 0",
                      transition:"all .15s",
                    }}
                    onMouseEnter={e=>{if(!active)(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.04)";}}
                    onMouseLeave={e=>{if(!active)(e.currentTarget as HTMLElement).style.background="transparent";}}
                  >
                    <item.icon size={14} style={{flexShrink:0}}/>
                    <span style={{fontSize:14, fontWeight:active?500:400, flex:1, textAlign:"left"}}>{item.label}</span>
                    {active && <ChevronRight size={11} style={{opacity:.4, flexShrink:0}}/>}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Bottom actions */}
        <div style={{borderTop:"1px solid rgba(255,255,255,.05)", padding:"8px"}}>
          {[
            {icon:Bell,     label:"Alerts",      badge:unreadAlerts, onClick:()=>setAlertsRead(true)},
            {icon:Settings, label:"Settings",    badge:0, onClick:()=>{}},
          ].map(item => (
            <button key={item.label} onClick={item.onClick}
              style={{width:"100%", display:"flex", alignItems:"center", gap:9, padding:"8px 10px", border:"none", cursor:"pointer", background:"transparent", color:"rgba(255,255,255,.65)", borderRadius:4, transition:"all .15s", marginBottom:1}}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.04)"}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}
            >
              <item.icon size={14}/><span style={{fontSize:14, flex:1, textAlign:"left"}}>{item.label}</span>
              {item.badge > 0 && <span style={{fontSize:8, background:"#CC0000", color:"#fff", padding:"1px 5px", borderRadius:2, fontFamily:"var(--font-mono)"}}>{item.badge}</span>}
            </button>
          ))}
          <Link href="/" style={{width:"100%", display:"flex", alignItems:"center", gap:9, padding:"8px 10px", textDecoration:"none", color:"rgba(255,255,255,.3)", borderRadius:4, transition:"background .15s", fontSize:12}}
            onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.04)"}
            onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}
          >
            <ArrowLeft size={14}/> Back to Site
          </Link>
        </div>
      </aside>

      {/* ── MAIN AREA ──────────────────────────────────────────── */}
      <div style={{flex:1, display:"flex", flexDirection:"column", minWidth:0, marginLeft:0}} className="main-area">

        {/* Top bar */}
        <header style={{
          flexShrink:0, height:56,
          background:"#1A1A35",
          borderBottom:"1px solid rgba(255,255,255,.05)",
          display:"flex", alignItems:"center",
          padding:"0 20px", gap:16,
          position:"sticky", top:0, zIndex:30,
        }}>
          <button onClick={()=>setSidebarOpen(true)} style={{background:"none", border:"none", color:"rgba(255,255,255,.5)", cursor:"pointer", display:"none"}} className="menu-btn">
            <Menu size={18}/>
          </button>

          {/* Page title */}
          <div style={{flex:"0 0 auto"}}>
            <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:15, color:"#fff", lineHeight:1.2}}>
              {activeItem?.label ?? "Dashboard"}
            </div>
          </div>

          {/* Search */}
          <div style={{flex:1, maxWidth:320, position:"relative"}}>
            <Search size={13} style={{position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", color:"rgba(255,255,255,.25)", pointerEvents:"none"}}/>
            <input
              value={searchVal}
              onChange={e=>setSearchVal(e.target.value)}
              placeholder="Search hospitals, deliveries, donors..."
              style={{
                width:"100%", background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)",
                color:"#fff", fontFamily:"var(--font-body)", fontSize:14,
                padding:"7px 10px 7px 30px", outline:"none", borderRadius:4,
              }}
            />
          </div>

          <div style={{marginLeft:"auto", display:"flex", alignItems:"center", gap:12}}>
            <LiveClock/>

            {/* Lagos live pill */}
            <div style={{display:"flex", alignItems:"center", gap:6, padding:"5px 10px", background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)", borderRadius:3}}>
              <span style={{width:6, height:6, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 5px #22c55e", flexShrink:0}}/>
              <span style={{fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.4)"}}>Lagos · Live</span>
            </div>

            {/* Refresh */}
            <button onClick={handleRefresh} style={{background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", color:"rgba(255,255,255,.5)", cursor:"pointer", padding:"6px", borderRadius:4, display:"flex", alignItems:"center"}}>
              <RefreshCw size={13} style={{animation:refreshing?"spin 1s linear infinite":"none"}}/>
            </button>

            {/* Avatar */}
            <div style={{width:30, height:30, borderRadius:"50%", background:"#CC0000", display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, fontWeight:700, flexShrink:0}}>OP</div>
          </div>
        </header>

        {/* Content area */}
        <main style={{flex:1, overflowY:"auto", padding:"20px", background:"#13132A"}}>

          {/* ════════════════════════════════════════════════════
              OVERVIEW TAB
          ════════════════════════════════════════════════════ */}
          {activeTab === "overview" && (
            <div>
              {/* 8 stat cards */}
              <div style={{display:"grid", gap:12, marginBottom:16, gridTemplateColumns:"repeat(2,1fr)"}} className="stat-grid">
                {STATS.map((s,i) => (
                  <div key={s.label} style={{
                    background:"#22224A", border:"1px solid rgba(255,255,255,.06)",
                    padding:"16px", position:"relative", overflow:"hidden",
                    transition:"border-color .2s",
                  }}
                    onMouseEnter={e=>(e.currentTarget as HTMLElement).style.borderColor=`${s.color}40`}
                    onMouseLeave={e=>(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.06)"}
                  >
                    <div style={{position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg, ${s.color}80, transparent)`}}/>
                    <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:12}}>
                      <div style={{width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center", background:`${s.color}18`, border:`1px solid ${s.color}30`, flexShrink:0}}>
                        <s.icon size={14} style={{color:s.color}}/>
                      </div>
                      {s.trend !== 0 && (
                        <div style={{display:"flex", alignItems:"center", gap:3, color:s.trend > 0 ? "#22c55e" : "#ff6b6b"}}>
                          {s.trend > 0 ? <TrendingUp size={10}/> : <TrendingDown size={10}/>}
                          <span style={{fontFamily:"var(--font-mono)", fontSize:9}}>{Math.abs(s.trend)}%</span>
                        </div>
                      )}
                    </div>
                    <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:"clamp(18px,2.5vw,26px)", color:"#fff", lineHeight:1, marginBottom:4}}>
                      {s.value}
                    </div>
                    <div style={{fontSize:15, color:"rgba(255,255,255,.55)", marginBottom:3}}>{s.label}</div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:8, color:`${s.color}aa`, letterSpacing:".08em"}}>{s.delta}</div>
                  </div>
                ))}
              </div>

              {/* Row 2: Deliveries table + Alerts */}
              <div style={{display:"grid", gap:12, marginBottom:12}} className="row-2">
                {/* Deliveries */}
                <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", overflow:"hidden"}}>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", borderBottom:"1px solid rgba(255,255,255,.05)"}}>
                    <div>
                      <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:15, color:"#fff"}}>Active Deliveries</div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.25)", marginTop:2}}>Real-time tracking</div>
                    </div>
                    <button onClick={()=>setActiveTab("deliveries")} style={{fontFamily:"var(--font-mono)", fontSize:9, color:"#2F80ED", background:"none", border:"none", cursor:"pointer", letterSpacing:".1em"}}>
                      VIEW ALL →
                    </button>
                  </div>
                  <div style={{overflowX:"auto"}}>
                    <table style={{width:"100%", borderCollapse:"collapse"}}>
                      <thead>
                        <tr style={{borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                          {["REF","HOSPITAL","BLOOD","UNITS","ETA","MODE","PRIORITY","STATUS"].map(h=>(
                            <th key={h} style={{padding:"8px 12px", fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.22)", whiteSpace:"nowrap", fontWeight:400, textAlign:"left"}}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {DELIVERIES.slice(0,5).map((d,i) => (
                          <tr key={d.id} style={{borderBottom:i<4?"1px solid rgba(255,255,255,.03)":"none"}}
                            onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.02)"}
                            onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}
                          >
                            <td style={{padding:"10px 12px", fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.3)", whiteSpace:"nowrap"}}>{d.id}</td>
                            <td style={{padding:"10px 12px", fontSize:16, color:"rgba(255,255,255,.75)", whiteSpace:"nowrap"}}>{d.hospital}</td>
                            <td style={{padding:"10px 12px"}}><span style={{fontFamily:"var(--font-mono)", fontWeight:700, fontSize:15, color:"#CC0000"}}>{d.blood}</span></td>
                            <td style={{padding:"10px 12px", fontFamily:"var(--font-mono)", fontSize:15, color:"rgba(255,255,255,.55)"}}>{d.units}</td>
                            <td style={{padding:"10px 12px", fontFamily:"var(--font-mono)", fontSize:10, color:d.eta==="Arrived"?"#22c55e":"#C9A84C", whiteSpace:"nowrap"}}>{d.eta}</td>
                            <td style={{padding:"10px 12px", fontFamily:"var(--font-mono)", fontSize:10, color:d.mode==="Drone"?"#2F80ED":"rgba(255,255,255,.4)", whiteSpace:"nowrap"}}>{d.mode}</td>
                            <td style={{padding:"10px 12px", whiteSpace:"nowrap"}}><Badge status={d.priority === "Critical" ? "Critical" : d.priority}/></td>
                            <td style={{padding:"10px 12px", whiteSpace:"nowrap"}}><Badge status={d.status}/></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Alerts */}
                <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)"}}>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", borderBottom:"1px solid rgba(255,255,255,.05)"}}>
                    <div>
                      <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:15, color:"#fff"}}>System Alerts</div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.25)", marginTop:2}}>Live feed</div>
                    </div>
                    <span style={{fontFamily:"var(--font-mono)", fontSize:8, background:"rgba(138,3,3,.2)", color:"#ff6b6b", padding:"3px 8px", border:"1px solid rgba(138,3,3,.3)"}}>
                      {unreadAlerts} CRITICAL
                    </span>
                  </div>
                  {ALERTS.map((a,i) => (
                    <div key={i} style={{display:"flex", alignItems:"flex-start", gap:10, padding:"11px 16px", borderBottom:i<ALERTS.length-1?"1px solid rgba(255,255,255,.03)":"none"}}
                      onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.02)"}
                      onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}
                    >
                      <AlertDot level={a.level}/>
                      <div style={{flex:1, minWidth:0}}>
                        <div style={{fontSize:16, color:"rgba(255,255,255,.62)", lineHeight:1.4}}>{a.msg}</div>
                        <div style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.22)", marginTop:3, letterSpacing:".08em"}}>{a.id} · {a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3: Blood Inventory + Hub Status + Analytics */}
              <div style={{display:"grid", gap:12}} className="row-3">
                {/* Blood inventory */}
                <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)"}}>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", borderBottom:"1px solid rgba(255,255,255,.05)"}}>
                    <div>
                      <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:15, color:"#fff"}}>Blood Inventory</div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.25)", marginTop:2}}>All hubs combined</div>
                    </div>
                    <button onClick={()=>setActiveTab("inventory")} style={{fontFamily:"var(--font-mono)", fontSize:9, color:"#2F80ED", background:"none", border:"none", cursor:"pointer"}}>
                      DETAILS →
                    </button>
                  </div>
                  <div style={{padding:"14px 16px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
                    {BLOOD_INVENTORY.map(b => (
                      <div key={b.type}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:6}}>
                          <div style={{display:"flex", alignItems:"center", gap:6}}>
                            <span style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:14, color:"#fff"}}>{b.type}</span>
                            <Badge status={b.status}/>
                          </div>
                          <div style={{display:"flex", alignItems:"center", gap:4}}>
                            <span style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.65)"}}>{b.units.toLocaleString()}</span>
                            <span style={{fontFamily:"var(--font-mono)", fontSize:8, color:b.trend > 0?"#22c55e":"#ff6b6b"}}>{b.trend > 0 ? "↑" : "↓"}</span>
                          </div>
                        </div>
                        <div style={{height:4, background:"rgba(255,255,255,.06)", borderRadius:9999, overflow:"hidden"}}>
                          <div style={{height:"100%", width:`${b.cap}%`, background:b.cap>60?"#22c55e":b.cap>35?"#C9A84C":"#CC0000", borderRadius:9999, transition:"width .7s"}}/>
                        </div>
                        <div style={{fontFamily:"var(--font-mono)", fontSize:7, color:"rgba(255,255,255,.2)", marginTop:3}}>{b.cap}% capacity</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hub network */}
                <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)"}}>
                  <div style={{padding:"14px 16px", borderBottom:"1px solid rgba(255,255,255,.05)", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div>
                      <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:15, color:"#fff"}}>Hub Network</div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.25)", marginTop:2}}>5 hubs · Lagos State</div>
                    </div>
                    <button onClick={()=>setActiveTab("hubs")} style={{fontFamily:"var(--font-mono)", fontSize:9, color:"#2F80ED", background:"none", border:"none", cursor:"pointer"}}>
                      MAP →
                    </button>
                  </div>
                  {HUBS.map((hub,i) => (
                    <div key={hub.id} style={{display:"flex", alignItems:"center", gap:12, padding:"10px 16px", borderBottom:i<HUBS.length-1?"1px solid rgba(255,255,255,.03)":"none"}}
                      onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.02)"}
                      onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}
                    >
                      <div style={{width:28, height:28, borderRadius:"50%", background:hub.status==="Operational"?"rgba(34,197,94,.1)":"rgba(201,168,76,.1)", border:`1px solid ${hub.status==="Operational"?"rgba(34,197,94,.25)":"rgba(201,168,76,.25)"}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
                        <span style={{fontFamily:"var(--font-mono)", fontSize:8, fontWeight:700, color:hub.status==="Operational"?"#22c55e":"#C9A84C"}}>{hub.short}</span>
                      </div>
                      <div style={{flex:1, minWidth:0}}>
                        <div style={{fontSize:16, color:"rgba(255,255,255,.72)", marginBottom:2, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{hub.name}</div>
                        <div style={{display:"flex", gap:8}}>
                          <span style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.25)"}}>{hub.units.toLocaleString()} units</span>
                          <span style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(47,128,237,.6)"}}>{hub.drones} drones</span>
                          <span style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.2)"}}>{hub.temp}</span>
                        </div>
                      </div>
                      <div>
                        <div style={{height:3, width:56, background:"rgba(255,255,255,.06)", borderRadius:9999, overflow:"hidden"}}>
                          <div style={{height:"100%", width:`${hub.capacity}%`, background:hub.capacity>60?"#22c55e":hub.capacity>40?"#C9A84C":"#CC0000", borderRadius:9999}}/>
                        </div>
                        <div style={{fontFamily:"var(--font-mono)", fontSize:7, color:"rgba(255,255,255,.18)", marginTop:2, textAlign:"right"}}>{hub.capacity}%</div>
                      </div>
                    </div>
                  ))}
                  <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", padding:"12px 16px", borderTop:"1px solid rgba(255,255,255,.04)", background:"rgba(255,255,255,.01)"}}>
                    {[{l:"Total Units",v:"18,420"},{l:"Avg Temp",v:"2.1°C"},{l:"Active Drones",v:"4 / 13"}].map(s=>(
                      <div key={s.l} style={{textAlign:"center"}}>
                        <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:15, color:"#fff"}}>{s.v}</div>
                        <div style={{fontFamily:"var(--font-mono)", fontSize:7, color:"rgba(255,255,255,.22)", letterSpacing:".1em", textTransform:"uppercase", marginTop:2}}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weekly chart */}
                <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", padding:"14px 16px"}}>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16}}>
                    <div>
                      <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:15, color:"#fff"}}>Weekly Performance</div>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.25)", marginTop:2}}>Last 7 days</div>
                    </div>
                    <div style={{display:"flex", gap:4}}>
                      {(["deliveries","donations","units"] as const).map(m => (
                        <button key={m} onClick={()=>setChartMetric(m)} style={{
                          fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".08em", textTransform:"uppercase",
                          padding:"4px 8px", border:"1px solid", cursor:"pointer",
                          background: chartMetric===m ? "rgba(138,3,3,.2)" : "transparent",
                          borderColor: chartMetric===m ? "rgba(138,3,3,.4)" : "rgba(255,255,255,.1)",
                          color: chartMetric===m ? "#ff6b6b" : "rgba(255,255,255,.35)",
                        }}>{m}</button>
                      ))}
                    </div>
                  </div>
                  <BarChart
                    data={WEEKLY_DATA}
                    field={chartMetric}
                    color={chartMetric==="deliveries"?"#CC0000":chartMetric==="donations"?"#2F80ED":"#22c55e"}
                  />
                  <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginTop:16, paddingTop:12, borderTop:"1px solid rgba(255,255,255,.05)"}}>
                    {[
                      {l:"Deliveries",  v:WEEKLY_DATA.reduce((a,d)=>a+d.deliveries,0),  c:"#CC0000"},
                      {l:"Donations",   v:WEEKLY_DATA.reduce((a,d)=>a+d.donations,0),   c:"#2F80ED"},
                      {l:"Units Out",   v:WEEKLY_DATA.reduce((a,d)=>a+d.units,0).toLocaleString(), c:"#22c55e"},
                    ].map(s=>(
                      <div key={s.l} style={{textAlign:"center"}}>
                        <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:18, color:s.c}}>{s.v}</div>
                        <div style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.55)", letterSpacing:".1em", textTransform:"uppercase", marginTop:2}}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════
              BLOOD INVENTORY TAB
          ════════════════════════════════════════════════════ */}
          {activeTab === "inventory" && (
            <div>
              <div style={{display:"grid", gap:12, marginBottom:14}} className="inv-grid">
                {BLOOD_INVENTORY.map(b => {
                  const statusColor = b.cap > 60 ? "#22c55e" : b.cap > 35 ? "#C9A84C" : "#ff4d4d";
                  return (
                    <div key={b.type} style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", padding:"20px", position:"relative", overflow:"hidden"}}>
                      <div style={{position:"absolute", top:0, left:0, bottom:0, width:3, background:statusColor}}/>
                      <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:14}}>
                        <div>
                          <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:28, color:"#fff", lineHeight:1}}>{b.type}</div>
                          <div style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.55)", marginTop:4, letterSpacing:".1em"}}>BLOOD TYPE</div>
                        </div>
                        <Badge status={b.status}/>
                      </div>
                      <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:22, color:statusColor, marginBottom:8}}>
                        {b.units.toLocaleString()} <span style={{fontSize:14, fontWeight:400, color:"rgba(255,255,255,.65)"}}>units</span>
                      </div>
                      <div style={{height:6, background:"rgba(255,255,255,.06)", borderRadius:9999, overflow:"hidden", marginBottom:8}}>
                        <div style={{height:"100%", width:`${b.cap}%`, background:`linear-gradient(90deg, ${statusColor}cc, ${statusColor})`, borderRadius:9999}}/>
                      </div>
                      <div style={{display:"flex", justifyContent:"space-between"}}>
                        <span style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.3)"}}>{b.cap}% of capacity</span>
                        <span style={{fontFamily:"var(--font-mono)", fontSize:9, color:b.trend > 0 ? "#22c55e" : "#ff6b6b"}}>
                          {b.trend > 0 ? "↑" : "↓"} {Math.abs(b.trend)}% today
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Summary stats */}
              <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", padding:"16px", display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12}} className="inv-summary">
                {[
                  {l:"Total Units Stored",  v:"18,420", c:"#22c55e"},
                  {l:"Critical Stock Types",v:"2",      c:"#ff4d4d"},
                  {l:"Low Stock Types",     v:"2",      c:"#C9A84C"},
                  {l:"Good Stock Types",    v:"4",      c:"#22c55e"},
                ].map(s=>(
                  <div key={s.l} style={{textAlign:"center", padding:"12px", background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.05)"}}>
                    <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:24, color:s.c}}>{s.v}</div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.3)", letterSpacing:".1em", textTransform:"uppercase", marginTop:4}}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════
              NAT SCREENING TAB
          ════════════════════════════════════════════════════ */}
          {activeTab === "screening" && (
            <div>
              <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", marginBottom:12}}>
                <div style={{padding:"14px 16px", borderBottom:"1px solid rgba(255,255,255,.05)", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <div>
                    <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:14, color:"#fff"}}>NAT Screening Batches</div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:8, textTransform:"uppercase", color:"rgba(255,255,255,.25)", letterSpacing:".1em", marginTop:2}}>Nucleic Acid Testing · Live queue</div>
                  </div>
                  <button style={{display:"flex", alignItems:"center", gap:6, background:"rgba(138,3,3,.15)", border:"1px solid rgba(138,3,3,.3)", color:"#ff6b6b", padding:"6px 12px", cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".1em"}}>
                    <Plus size={11}/> NEW BATCH
                  </button>
                </div>
                <table style={{width:"100%", borderCollapse:"collapse"}}>
                  <thead>
                    <tr style={{borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      {["BATCH ID","TYPE","UNITS","STARTED","ETA","PROGRESS","LAB","STATUS"].map(h=>(
                        <th key={h} style={{padding:"9px 14px", fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.22)", fontWeight:400, textAlign:"left", whiteSpace:"nowrap"}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {SCREENING.map((s,i) => (
                      <tr key={s.batch} style={{borderBottom:i<SCREENING.length-1?"1px solid rgba(255,255,255,.03)":"none"}}
                        onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.02)"}
                        onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}
                      >
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(255,255,255,.85)", whiteSpace:"nowrap"}}>{s.batch}</td>
                        <td style={{padding:"12px 14px", fontSize:16, color:"rgba(255,255,255,.7)"}}>{s.type}</td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:15, color:"rgba(255,255,255,.55)"}}>{s.units}</td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(255,255,255,.38)"}}>{s.started}</td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:10, color:s.status==="Complete"?"#22c55e":"#C9A84C"}}>{s.eta}</td>
                        <td style={{padding:"12px 14px"}}>
                          <div style={{display:"flex", alignItems:"center", gap:8}}>
                            <div style={{flex:1, height:4, background:"rgba(255,255,255,.06)", borderRadius:9999, overflow:"hidden", minWidth:60}}>
                              <div style={{height:"100%", width:`${s.pct}%`, background:s.pct===100?"#22c55e":"#2F80ED", borderRadius:9999}}/>
                            </div>
                            <span style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.65)", flexShrink:0}}>{s.pct}%</span>
                          </div>
                        </td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(255,255,255,.65)"}}>{s.lab}</td>
                        <td style={{padding:"12px 14px", whiteSpace:"nowrap"}}><Badge status={s.status}/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12}} className="screen-stats">
                {[
                  {l:"Batches Today",    v:"6",    sub:"4 complete, 2 active", c:"#2F80ED"},
                  {l:"Units Processed",  v:"448",  sub:"Since midnight",       c:"#22c55e"},
                  {l:"Pass Rate",        v:"99.6%",sub:"HIV/Hep B/C/HTLV",    c:"#22c55e"},
                  {l:"Avg Batch Time",   v:"4.2h", sub:"Per 120-unit batch",   c:"#C9A84C"},
                ].map(s=>(
                  <div key={s.l} style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", padding:"16px 20px"}}>
                    <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:28, color:s.c, lineHeight:1, marginBottom:4}}>{s.v}</div>
                    <div style={{fontSize:16, color:"rgba(255,255,255,.6)", marginBottom:2}}>{s.l}</div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.55)"}}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════
              DELIVERIES TAB
          ════════════════════════════════════════════════════ */}
          {activeTab === "deliveries" && (
            <div>
              <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:14, flexWrap:"wrap"}}>
                <button style={{display:"flex", alignItems:"center", gap:6, background:"rgba(138,3,3,.15)", border:"1px solid rgba(138,3,3,.3)", color:"#ff6b6b", padding:"8px 14px", cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".1em"}}>
                  <Plus size={11}/> NEW REQUEST
                </button>
                <button style={{display:"flex", alignItems:"center", gap:6, background:"transparent", border:"1px solid rgba(255,255,255,.1)", color:"rgba(255,255,255,.85)", padding:"8px 14px", cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".1em"}}>
                  <Filter size={11}/> FILTER
                </button>
                <button style={{display:"flex", alignItems:"center", gap:6, background:"transparent", border:"1px solid rgba(255,255,255,.1)", color:"rgba(255,255,255,.85)", padding:"8px 14px", cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".1em"}}>
                  <Download size={11}/> EXPORT
                </button>
                <div style={{marginLeft:"auto", display:"flex", gap:6}}>
                  {["All","In Flight","In Transit","Delivered"].map(f=>(
                    <button key={f} style={{fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".08em", padding:"5px 10px", border:"1px solid rgba(255,255,255,.1)", background:"transparent", color:"rgba(255,255,255,.38)", cursor:"pointer"}}>{f}</button>
                  ))}
                </div>
              </div>
              <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", overflow:"hidden"}}>
                <table style={{width:"100%", borderCollapse:"collapse"}}>
                  <thead>
                    <tr style={{borderBottom:"1px solid rgba(255,255,255,.05)"}}>
                      {["REF","HOSPITAL","BLOOD TYPE","UNITS","ETA","MODE","HUB","PRIORITY","STATUS"].map(h=>(
                        <th key={h} style={{padding:"10px 14px", fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.22)", fontWeight:400, textAlign:"left", whiteSpace:"nowrap"}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DELIVERIES.map((d,i) => (
                      <tr key={d.id} style={{borderBottom:i<DELIVERIES.length-1?"1px solid rgba(255,255,255,.03)":"none", cursor:"pointer"}}
                        onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.025)"}
                        onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}
                      >
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.65)"}}>{d.id}</td>
                        <td style={{padding:"12px 14px", fontSize:15, color:"rgba(255,255,255,.78)"}}>{d.hospital}</td>
                        <td style={{padding:"12px 14px"}}><span style={{fontFamily:"var(--font-mono)", fontWeight:700, fontSize:14, color:"#CC0000"}}>{d.blood}</span></td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:15, color:"rgba(255,255,255,.55)"}}>{d.units}</td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:15, color:d.eta==="Arrived"?"#22c55e":"#C9A84C", whiteSpace:"nowrap"}}>{d.eta}</td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:10, color:d.mode==="Drone"?"#2F80ED":"rgba(255,255,255,.45)"}}>{d.mode}</td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(255,255,255,.3)"}}>{d.hub}</td>
                        <td style={{padding:"12px 14px", whiteSpace:"nowrap"}}><Badge status={d.priority === "Critical" ? "Critical" : d.priority === "Urgent" ? "Low" : "Good"}/></td>
                        <td style={{padding:"12px 14px", whiteSpace:"nowrap"}}><Badge status={d.status}/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════
              DONORS TAB
          ════════════════════════════════════════════════════ */}
          {activeTab === "donors" && (
            <div>
              <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12, marginBottom:14}} className="donor-stats">
                {[
                  {l:"Donors Today",    v:"284", c:"#2F80ED", sub:"vs 253 average"},
                  {l:"Units Collected", v:"450ml × 283", c:"#22c55e", sub:"1 deferred"},
                  {l:"New Registrations",v:"47",c:"#9333EA",  sub:"First-time donors"},
                  {l:"Repeat Donors",   v:"237", c:"#C9A84C", sub:"84% of today's"},
                ].map(s=>(
                  <div key={s.l} style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", padding:"18px 20px"}}>
                    <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:24, color:s.c, lineHeight:1, marginBottom:4}}>{s.v}</div>
                    <div style={{fontSize:16, color:"rgba(255,255,255,.6)", marginBottom:3}}>{s.l}</div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.55)"}}>{s.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)"}}>
                <div style={{padding:"14px 16px", borderBottom:"1px solid rgba(255,255,255,.05)", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:14, color:"#fff"}}>Today&apos;s Donors</div>
                  <button style={{display:"flex", alignItems:"center", gap:5, background:"rgba(47,128,237,.12)", border:"1px solid rgba(47,128,237,.25)", color:"#2F80ED", padding:"6px 12px", cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".08em"}}>
                    <Plus size={10}/> REGISTER DONOR
                  </button>
                </div>
                <table style={{width:"100%", borderCollapse:"collapse"}}>
                  <thead>
                    <tr style={{borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      {["DONOR ID","NAME","BLOOD TYPE","DATE/TIME","VOLUME","STATUS"].map(h=>(
                        <th key={h} style={{padding:"9px 14px", fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.22)", fontWeight:400, textAlign:"left", whiteSpace:"nowrap"}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DONORS.map((d,i) => (
                      <tr key={d.id} style={{borderBottom:i<DONORS.length-1?"1px solid rgba(255,255,255,.03)":"none"}}
                        onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.02)"}
                        onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}
                      >
                        <td style={{padding:"11px 14px", fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.3)"}}>{d.id}</td>
                        <td style={{padding:"11px 14px", fontSize:15, color:"rgba(255,255,255,.75)"}}>{d.name}</td>
                        <td style={{padding:"11px 14px"}}><span style={{fontFamily:"var(--font-mono)", fontWeight:700, fontSize:14, color:"#CC0000"}}>{d.blood}</span></td>
                        <td style={{padding:"11px 14px", fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(255,255,255,.38)"}}>{d.date}</td>
                        <td style={{padding:"11px 14px", fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(255,255,255,.85)"}}>{d.vol}</td>
                        <td style={{padding:"11px 14px", whiteSpace:"nowrap"}}><Badge status={d.status}/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════
              HOSPITALS TAB
          ════════════════════════════════════════════════════ */}
          {activeTab === "hospitals" && (
            <div>
              <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", marginBottom:12}}>
                <div style={{padding:"14px 16px", borderBottom:"1px solid rgba(255,255,255,.05)", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <div>
                    <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:14, color:"#fff"}}>Hospital Network</div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:8, textTransform:"uppercase", color:"rgba(255,255,255,.25)", letterSpacing:".1em", marginTop:2}}>147 connected · Lagos State</div>
                  </div>
                  <button style={{display:"flex", alignItems:"center", gap:5, background:"rgba(47,128,237,.12)", border:"1px solid rgba(47,128,237,.25)", color:"#2F80ED", padding:"6px 12px", cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:".08em"}}>
                    <Plus size={10}/> ADD HOSPITAL
                  </button>
                </div>
                <table style={{width:"100%", borderCollapse:"collapse"}}>
                  <thead>
                    <tr style={{borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                      {["HOSPITAL","AREA","TIER","REQUESTS (7d)","LAST ORDER","STATUS"].map(h=>(
                        <th key={h} style={{padding:"9px 14px", fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.22)", fontWeight:400, textAlign:"left", whiteSpace:"nowrap"}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {HOSPITALS.map((h,i) => (
                      <tr key={h.name} style={{borderBottom:i<HOSPITALS.length-1?"1px solid rgba(255,255,255,.03)":"none"}}
                        onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.02)"}
                        onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="transparent"}
                      >
                        <td style={{padding:"12px 14px", fontSize:15, color:"rgba(255,255,255,.75)"}}>{h.name}</td>
                        <td style={{padding:"12px 14px", fontSize:16, color:"rgba(255,255,255,.4)"}}>{h.area}</td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.65)"}}>{h.tier}</td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:14, color:"#2F80ED"}}>{h.requests}</td>
                        <td style={{padding:"12px 14px", fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(255,255,255,.65)"}}>{h.lastOrder}</td>
                        <td style={{padding:"12px 14px", whiteSpace:"nowrap"}}><Badge status={h.status}/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12}} className="hosp-stats">
                {[
                  {l:"Total Connected",v:"147", c:"#22c55e", sub:"34 pending activation"},
                  {l:"Requests Today", v:"89",  c:"#2F80ED", sub:"All fulfilled"},
                  {l:"Level 1 Hospitals",v:"14",c:"#CC0000",  sub:"Teaching + Specialist"},
                  {l:"Avg Response Time",v:"47m",c:"#C9A84C", sub:"Request to delivery"},
                ].map(s=>(
                  <div key={s.l} style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", padding:"18px 20px"}}>
                    <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:24, color:s.c, lineHeight:1, marginBottom:4}}>{s.v}</div>
                    <div style={{fontSize:16, color:"rgba(255,255,255,.6)", marginBottom:3}}>{s.l}</div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.55)"}}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════
              HUBS TAB
          ════════════════════════════════════════════════════ */}
          {activeTab === "hubs" && (
            <div>
              <div style={{display:"grid", gap:14}} className="hubs-grid">
                {HUBS.map(hub => {
                  const sc = hub.status === "Operational" ? "#22c55e" : "#C9A84C";
                  return (
                    <div key={hub.id} style={{background:"#22224A", border:`1px solid ${hub.status==="Warning"?"rgba(201,168,76,.3)":"rgba(255,255,255,.06)"}`, padding:"20px 24px", position:"relative", overflow:"hidden"}}>
                      <div style={{position:"absolute", top:0, left:0, bottom:0, width:3, background:sc}}/>
                      <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:16}}>
                        <div>
                          <div style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.3)", letterSpacing:".12em", marginBottom:4}}>{hub.id}</div>
                          <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:20, color:"#fff"}}>Hub {hub.short} — {hub.name}</div>
                        </div>
                        <Badge status={hub.status}/>
                      </div>
                      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:14}}>
                        {[
                          {l:"Units Stored",  v:hub.units.toLocaleString(), c:"#fff"},
                          {l:"Temperature",   v:hub.temp,                   c:hub.temp==="2.4°C"?"#C9A84C":"#22c55e"},
                          {l:"Drones Total",  v:hub.drones,                 c:"#2F80ED"},
                          {l:"Drones Active", v:hub.droneActive,            c:hub.droneActive>0?"#2F80ED":"rgba(255,255,255,.3)"},
                        ].map(s=>(
                          <div key={s.l} style={{textAlign:"center", padding:"10px", background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.06)"}}>
                            <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:18, color:s.c, lineHeight:1}}>{s.v}</div>
                            <div style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.55)", letterSpacing:".08em", textTransform:"uppercase", marginTop:4}}>{s.l}</div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div style={{display:"flex", justifyContent:"space-between", marginBottom:5}}>
                          <span style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.65)"}}>Storage capacity</span>
                          <span style={{fontFamily:"var(--font-mono)", fontSize:9, color:sc}}>{hub.capacity}%</span>
                        </div>
                        <div style={{height:6, background:"rgba(255,255,255,.06)", borderRadius:9999, overflow:"hidden"}}>
                          <div style={{height:"100%", width:`${hub.capacity}%`, background:`linear-gradient(90deg, ${sc}99, ${sc})`, borderRadius:9999}}/>
                        </div>
                      </div>
                      {hub.status === "Warning" && (
                        <div style={{marginTop:12, padding:"8px 12px", background:"rgba(201,168,76,.08)", border:"1px solid rgba(201,168,76,.2)", display:"flex", alignItems:"center", gap:8}}>
                          <AlertCircle size={12} style={{color:"#C9A84C", flexShrink:0}}/>
                          <span style={{fontFamily:"var(--font-mono)", fontSize:9, color:"#C9A84C", letterSpacing:".08em"}}>Temperature variance detected — maintenance team notified</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════
              DRONES TAB
          ════════════════════════════════════════════════════ */}
          {activeTab === "drones" && (
            <div>
              <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12, marginBottom:14}} className="drone-stats">
                {[
                  {l:"Total Fleet",     v:"13",  c:"#2F80ED", sub:"Across 5 hubs"},
                  {l:"In Flight",       v:"4",   c:"#22c55e", sub:"Active missions"},
                  {l:"Charging",        v:"7",   c:"#C9A84C", sub:"Ready in 20–40 min"},
                  {l:"Under Maintenance",v:"2",  c:"rgba(255,255,255,.4)", sub:"Hub 3 + Hub 5"},
                ].map(s=>(
                  <div key={s.l} style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", padding:"18px 20px"}}>
                    <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:28, color:s.c, lineHeight:1, marginBottom:4}}>{s.v}</div>
                    <div style={{fontSize:16, color:"rgba(255,255,255,.6)", marginBottom:3}}>{s.l}</div>
                    <div style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.55)"}}>{s.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)"}}>
                <div style={{padding:"14px 16px", borderBottom:"1px solid rgba(255,255,255,.05)"}}>
                  <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:14, color:"#fff"}}>Fleet Status</div>
                  <div style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.25)", letterSpacing:".1em", textTransform:"uppercase", marginTop:2}}>All units · Real-time</div>
                </div>
                <div style={{padding:"16px", display:"grid", gap:10}}>
                  {HUBS.map(hub => (
                    <div key={hub.id}>
                      <div style={{fontFamily:"var(--font-mono)", fontSize:9, color:"rgba(255,255,255,.3)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:6}}>{hub.name} ({hub.drones} units)</div>
                      <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                        {Array.from({length:hub.drones}).map((_,i) => {
                          const isActive = i < hub.droneActive;
                          return (
                            <div key={i} style={{
                              padding:"8px 12px", border:`1px solid ${isActive?"rgba(47,128,237,.35)":"rgba(255,255,255,.08)"}`,
                              background:isActive?"rgba(47,128,237,.08)":"rgba(255,255,255,.02)",
                            }}>
                              <div style={{fontFamily:"var(--font-mono)", fontSize:9, color:isActive?"#2F80ED":"rgba(255,255,255,.3)", letterSpacing:".08em"}}>
                                {hub.short}-DRONE-0{i+1}
                              </div>
                              <div style={{fontFamily:"var(--font-mono)", fontSize:8, color:isActive?"rgba(47,128,237,.6)":"rgba(255,255,255,.2)", marginTop:3}}>
                                {isActive?"IN FLIGHT":"STANDBY"}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════
              ANALYTICS TAB
          ════════════════════════════════════════════════════ */}
          {activeTab === "analytics" && (
            <div>
              <div style={{display:"grid", gap:12}} className="analytics-grid">
                {(["deliveries","donations","units"] as const).map(metric => (
                  <div key={metric} style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", padding:"18px 20px"}}>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16}}>
                      <div>
                        <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:14, color:"#fff", textTransform:"capitalize"}}>{metric}</div>
                        <div style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.55)", letterSpacing:".1em", textTransform:"uppercase", marginTop:2}}>7-day trend</div>
                      </div>
                      <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:22, color:metric==="deliveries"?"#CC0000":metric==="donations"?"#2F80ED":"#22c55e"}}>
                        {WEEKLY_DATA.reduce((a,d)=>a+d[metric],0).toLocaleString()}
                      </div>
                    </div>
                    <BarChart data={WEEKLY_DATA} field={metric} color={metric==="deliveries"?"#CC0000":metric==="donations"?"#2F80ED":"#22c55e"}/>
                  </div>
                ))}
              </div>
              {/* Summary KPIs */}
              <div style={{background:"#22224A", border:"1px solid rgba(255,255,255,.06)", marginTop:12, padding:"18px 20px"}}>
                <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:14, color:"#fff", marginBottom:14}}>Key Performance Indicators</div>
                <div style={{display:"grid", gap:12}} className="kpi-grid">
                  {[
                    {l:"On-Time Delivery Rate",       v:"94.2%", c:"#22c55e", delta:"+1.8% vs last week"},
                    {l:"Average Delivery Time",        v:"47 min", c:"#C9A84C", delta:"-3 min vs last week"},
                    {l:"Blood Wastage Rate",           v:"0.4%",  c:"#22c55e", delta:"-0.1% improvement"},
                    {l:"Hospital Satisfaction Score",  v:"4.8/5", c:"#2F80ED", delta:"Based on 89 reviews"},
                    {l:"Drone Mission Success Rate",   v:"99.1%", c:"#22c55e", delta:"All hubs combined"},
                    {l:"NAT Screening Pass Rate",      v:"99.6%", c:"#22c55e", delta:"YTD average"},
                  ].map(kpi=>(
                    <div key={kpi.l} style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 16px", background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.05)"}}>
                      <div style={{fontSize:15, color:"rgba(255,255,255,.65)"}}>{kpi.l}</div>
                      <div style={{textAlign:"right", flexShrink:0, marginLeft:16}}>
                        <div style={{fontFamily:"var(--font-display)", fontWeight:700, fontSize:18, color:kpi.c, lineHeight:1}}>{kpi.v}</div>
                        <div style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.25)", marginTop:2}}>{kpi.delta}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bottom footer */}
          <div style={{marginTop:20, paddingTop:14, borderTop:"1px solid rgba(255,255,255,.04)", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:8}}>
            <div style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.15)", letterSpacing:".1em", textTransform:"uppercase"}}>
              CrimsonWings OS v2.0 · Mission Control · Lagos State Operations · Refreshes every 60s
            </div>
            <div style={{fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.12)", letterSpacing:".1em"}}>
              Built by JAA Studio
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @media(min-width:1024px){
          .sidebar { position:static !important; transform:none !important; }
          .main-area { margin-left:0 !important; }
          .sidebar-close { display:none !important; }
          .menu-btn { display:none !important; }
        }
        @media(max-width:1023px){
          .sidebar { transform:translateX(-100%) !important; }
          .sidebar.open { transform:translateX(0) !important; }
          .menu-btn { display:flex !important; }
        }
        .stat-grid { grid-template-columns:repeat(2,1fr) !important; }
        @media(min-width:900px){ .stat-grid { grid-template-columns:repeat(4,1fr) !important; } }
        .row-2 { grid-template-columns:1fr !important; }
        @media(min-width:1100px){ .row-2 { grid-template-columns:1.8fr 1fr !important; } }
        .row-3 { grid-template-columns:1fr !important; }
        @media(min-width:900px){ .row-3 { grid-template-columns:1fr 1fr !important; } }
        @media(min-width:1300px){ .row-3 { grid-template-columns:1fr 1fr 1fr !important; } }
        .inv-grid { grid-template-columns:repeat(2,1fr) !important; }
        @media(min-width:900px){ .inv-grid { grid-template-columns:repeat(4,1fr) !important; } }
        .inv-summary { grid-template-columns:repeat(2,1fr) !important; }
        @media(min-width:700px){ .inv-summary { grid-template-columns:repeat(4,1fr) !important; } }
        .screen-stats { grid-template-columns:repeat(2,1fr) !important; }
        @media(min-width:700px){ .screen-stats { grid-template-columns:repeat(4,1fr) !important; } }
        .donor-stats { grid-template-columns:repeat(2,1fr) !important; }
        @media(min-width:700px){ .donor-stats { grid-template-columns:repeat(4,1fr) !important; } }
        .hosp-stats { grid-template-columns:repeat(2,1fr) !important; }
        .hubs-grid { grid-template-columns:1fr !important; }
        @media(min-width:900px){ .hubs-grid { grid-template-columns:1fr 1fr !important; } }
        .drone-stats { grid-template-columns:repeat(2,1fr) !important; }
        @media(min-width:700px){ .drone-stats { grid-template-columns:repeat(4,1fr) !important; } }
        .analytics-grid { grid-template-columns:1fr !important; }
        @media(min-width:900px){ .analytics-grid { grid-template-columns:repeat(3,1fr) !important; } }
        .kpi-grid { grid-template-columns:1fr !important; }
        @media(min-width:700px){ .kpi-grid { grid-template-columns:1fr 1fr !important; } }
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        * { scrollbar-width:thin; scrollbar-color:#CC0000 #0B1120; }
        *::-webkit-scrollbar { width:4px; height:4px; }
        *::-webkit-scrollbar-track { background:#0B1120; }
        *::-webkit-scrollbar-thumb { background:#CC0000; border-radius:2px; }
      `}</style>
    </div>
  );
}
