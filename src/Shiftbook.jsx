import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, X, StickyNote, Wallet, Calendar, TrendingUp, BookOpen } from 'lucide-react';

// ==================== Medical-themed SVG Characters ====================

// 1. หมอน้อยใส่ stethoscope (mascot หลัก)
const DoctorMascot = ({ className = "", size = 80 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
    <circle cx="50" cy="38" r="22" fill="#FFE0D0" />
    <path d="M 30 32 Q 32 18 50 18 Q 68 18 70 32 Q 68 28 50 28 Q 32 28 30 32 Z" fill="#5D4E3A" />
    <path d="M 35 24 L 65 24 L 63 18 L 37 18 Z" fill="#FFFFFF" stroke="#E8A4B8" strokeWidth="0.5" />
    <path d="M 48 19 L 52 19 L 52 22 L 55 22 L 55 24 L 45 24 L 45 22 L 48 22 Z" fill="#E8A4B8" />
    <circle cx="42" cy="40" r="2.5" fill="#3D3128" />
    <circle cx="58" cy="40" r="2.5" fill="#3D3128" />
    <circle cx="42.5" cy="39" r="0.8" fill="#FFFFFF" />
    <circle cx="58.5" cy="39" r="0.8" fill="#FFFFFF" />
    <ellipse cx="36" cy="46" rx="3" ry="2" fill="#FFB8C8" opacity="0.6" />
    <ellipse cx="64" cy="46" rx="3" ry="2" fill="#FFB8C8" opacity="0.6" />
    <path d="M 46 48 Q 50 52 54 48" stroke="#3D3128" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M 30 60 Q 30 55 35 55 L 65 55 Q 70 55 70 60 L 72 90 L 28 90 Z" fill="#FFFFFF" stroke="#E8E0F0" strokeWidth="0.5" />
    <path d="M 45 55 L 50 62 L 55 55" fill="#FFE0D0" stroke="#E8E0F0" strokeWidth="0.5" />
    <path d="M 42 60 Q 38 70 42 78 Q 46 82 50 80" stroke="#B8A4D4" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="50" cy="80" r="3" fill="#B8A4D4" />
    <circle cx="50" cy="80" r="1.5" fill="#FFFFFF" />
    <rect x="58" y="68" width="8" height="10" rx="1" fill="#FFE5EC" stroke="#E8A4B8" strokeWidth="0.5" />
  </svg>
);

// 2. ขวด IV / น้ำเกลือ
const IVBag = ({ className = "", size = 50 }) => (
  <svg viewBox="0 0 60 100" width={size * 0.6} height={size} className={className}>
    <circle cx="30" cy="8" r="3" fill="none" stroke="#B8A4D4" strokeWidth="1.5" />
    <line x1="30" y1="11" x2="30" y2="18" stroke="#B8A4D4" strokeWidth="1.5" />
    <path d="M 18 18 L 42 18 L 44 50 Q 44 55 39 55 L 21 55 Q 16 55 16 50 Z" fill="#C7E9F1" stroke="#A4C4E8" strokeWidth="1" />
    <path d="M 19 30 L 41 30 L 42 50 Q 42 53 38 53 L 22 53 Q 18 53 18 50 Z" fill="#A4C4E8" opacity="0.5" />
    <rect x="22" y="35" width="16" height="10" rx="1" fill="#FFFFFF" opacity="0.8" />
    <line x1="24" y1="38" x2="36" y2="38" stroke="#B8A4D4" strokeWidth="0.5" />
    <line x1="24" y1="41" x2="33" y2="41" stroke="#B8A4D4" strokeWidth="0.5" />
    <path d="M 30 55 Q 30 70 30 85" stroke="#A4C4E8" strokeWidth="1" fill="none" strokeLinecap="round" />
    <ellipse cx="30" cy="62" rx="1.5" ry="2" fill="#A4C4E8" />
    <circle cx="26" cy="42" r="0.8" fill="#3D3128" />
    <circle cx="34" cy="42" r="0.8" fill="#3D3128" />
    <path d="M 27 46 Q 30 48 33 46" stroke="#3D3128" strokeWidth="0.6" fill="none" strokeLinecap="round" />
  </svg>
);

// 3. หน้ากากดมยา (anesthesia mask)
const AnesthesiaMask = ({ className = "", size = 60 }) => (
  <svg viewBox="0 0 100 80" width={size} height={size * 0.8} className={className}>
    <ellipse cx="50" cy="45" rx="28" ry="22" fill="#D4D0F5" stroke="#B8A4D4" strokeWidth="1.5" />
    <ellipse cx="50" cy="45" rx="22" ry="17" fill="#FFFFFF" opacity="0.6" />
    <path d="M 50 23 Q 50 12 60 8 Q 70 6 75 10" stroke="#B8A4D4" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="76" cy="11" r="3" fill="#B8A4D4" />
    <circle cx="42" cy="42" r="2" fill="#3D3128" />
    <circle cx="58" cy="42" r="2" fill="#3D3128" />
    <circle cx="42.5" cy="41" r="0.7" fill="#FFFFFF" />
    <circle cx="58.5" cy="41" r="0.7" fill="#FFFFFF" />
    <ellipse cx="35" cy="50" rx="3" ry="1.8" fill="#FFB8C8" opacity="0.7" />
    <ellipse cx="65" cy="50" rx="3" ry="1.8" fill="#FFB8C8" opacity="0.7" />
    <path d="M 44 52 Q 50 56 56 52" stroke="#3D3128" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <text x="20" y="20" fontSize="10" fill="#B8A4D4" fontFamily="serif">z</text>
    <text x="14" y="32" fontSize="7" fill="#B8A4D4" fontFamily="serif">z</text>
  </svg>
);

// 4. หัวใจกับเส้น ECG
const HeartECG = ({ className = "", size = 60 }) => (
  <svg viewBox="0 0 100 60" width={size} height={size * 0.6} className={className}>
    <path d="M 25 15 Q 18 8 12 15 Q 6 22 25 38 Q 44 22 38 15 Q 32 8 25 15 Z" fill="#FFB8C8" stroke="#E8A4B8" strokeWidth="1" />
    <ellipse cx="18" cy="22" rx="2" ry="1.5" fill="#FFFFFF" opacity="0.7" />
    <circle cx="20" cy="20" r="1" fill="#3D3128" />
    <circle cx="30" cy="20" r="1" fill="#3D3128" />
    <path d="M 22 25 Q 25 27 28 25" stroke="#3D3128" strokeWidth="0.5" fill="none" />
    <path d="M 45 28 L 55 28 L 58 22 L 62 34 L 66 18 L 70 28 L 95 28" stroke="#E8A4B8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 5. ยาแคปซูลน่ารัก
const PillCharacter = ({ className = "", size = 50 }) => (
  <svg viewBox="0 0 80 50" width={size} height={size * 0.625} className={className}>
    <path d="M 15 10 Q 5 10 5 25 Q 5 40 15 40 L 40 40 L 40 10 Z" fill="#FFD6E0" stroke="#E8A4B8" strokeWidth="1" />
    <path d="M 65 10 Q 75 10 75 25 Q 75 40 65 40 L 40 40 L 40 10 Z" fill="#C7E9F1" stroke="#A4C4E8" strokeWidth="1" />
    <ellipse cx="15" cy="18" rx="3" ry="6" fill="#FFFFFF" opacity="0.5" />
    <ellipse cx="65" cy="18" rx="3" ry="6" fill="#FFFFFF" opacity="0.5" />
    <circle cx="22" cy="23" r="1.5" fill="#3D3128" />
    <circle cx="58" cy="23" r="1.5" fill="#3D3128" />
    <path d="M 35 28 Q 40 32 45 28" stroke="#3D3128" strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </svg>
);

// 6. โล่กากบาทกาชาด
const HospitalCross = ({ className = "", size = 50 }) => (
  <svg viewBox="0 0 60 60" width={size} height={size} className={className}>
    <path d="M 30 5 L 50 12 L 50 35 Q 50 48 30 56 Q 10 48 10 35 L 10 12 Z" fill="#FFFFFF" stroke="#E8A4B8" strokeWidth="2" />
    <rect x="25" y="18" width="10" height="24" rx="1" fill="#E8A4B8" />
    <rect x="18" y="25" width="24" height="10" rx="1" fill="#E8A4B8" />
  </svg>
);

// ==================== End characters ====================

const THAI_HOLIDAYS = {
  '2025-01-01': 'วันขึ้นปีใหม่',
  '2025-02-12': 'วันมาฆบูชา',
  '2025-04-06': 'วันจักรี',
  '2025-04-07': 'ชดเชยวันจักรี',
  '2025-04-13': 'วันสงกรานต์',
  '2025-04-14': 'วันสงกรานต์',
  '2025-04-15': 'วันสงกรานต์',
  '2025-05-01': 'วันแรงงาน',
  '2025-05-04': 'วันฉัตรมงคล',
  '2025-05-05': 'ชดเชยวันฉัตรมงคล',
  '2025-05-11': 'วันวิสาขบูชา',
  '2025-05-12': 'ชดเชยวันวิสาขบูชา',
  '2025-06-03': 'วันเฉลิมฯ พระราชินี',
  '2025-07-10': 'วันอาสาฬหบูชา',
  '2025-07-11': 'วันเข้าพรรษา',
  '2025-07-28': 'วันเฉลิมฯ ร.10',
  '2025-08-12': 'วันแม่แห่งชาติ',
  '2025-10-13': 'วันคล้ายวันสวรรคต ร.9',
  '2025-10-23': 'วันปิยมหาราช',
  '2025-12-05': 'วันพ่อแห่งชาติ',
  '2025-12-10': 'วันรัฐธรรมนูญ',
  '2025-12-31': 'วันสิ้นปี',
  '2026-01-01': 'วันขึ้นปีใหม่',
  '2026-01-02': 'วันหยุดพิเศษ',
  '2026-03-03': 'วันมาฆบูชา',
  '2026-04-06': 'วันจักรี',
  '2026-04-13': 'วันสงกรานต์',
  '2026-04-14': 'วันสงกรานต์',
  '2026-04-15': 'วันสงกรานต์',
  '2026-05-01': 'วันแรงงาน',
  '2026-05-04': 'วันฉัตรมงคล',
  '2026-05-31': 'วันวิสาขบูชา',
  '2026-06-01': 'ชดเชยวันวิสาขบูชา',
  '2026-06-03': 'วันเฉลิมฯ พระราชินี',
  '2026-07-28': 'วันเฉลิมฯ ร.10',
  '2026-07-29': 'วันอาสาฬหบูชา',
  '2026-07-30': 'วันเข้าพรรษา',
  '2026-08-12': 'วันแม่แห่งชาติ',
  '2026-10-13': 'วันคล้ายวันสวรรคต ร.9',
  '2026-10-23': 'วันปิยมหาราช',
  '2026-12-05': 'วันพ่อแห่งชาติ',
  '2026-12-07': 'ชดเชยวันพ่อแห่งชาติ',
  '2026-12-10': 'วันรัฐธรรมนูญ',
  '2026-12-31': 'วันสิ้นปี',
};

const THAI_MONTHS = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
const THAI_DAYS = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];
const THAI_DAYS_FULL = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];

const PASTEL_PRESETS = [
  '#FFD6E0', '#FFE5B4', '#FFF4B8', '#D4F1C5', '#C7E9F1', '#D4D0F5',
  '#F5C6E0', '#FFCCBC', '#E0E5C1', '#C5CAE9', '#F8BBD0', '#D7CCC8',
];

const getTextColor = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#5d4e3a' : '#ffffff';
};

const formatDateKey = (year, month, day) => {
  const m = String(month + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
};

const formatMoney = (n) => {
  if (!n) return '0';
  return Number(n).toLocaleString('th-TH');
};

export default function Shiftbook() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [scheduleData, setScheduleData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editingShiftIndex, setEditingShiftIndex] = useState(null);
  const [shiftDraft, setShiftDraft] = useState({ name: '', amount: '', color: PASTEL_PRESETS[0] });
  const [noteDraft, setNoteDraft] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem('shiftbook-data');
      if (raw) {
        setScheduleData(JSON.parse(raw));
      }
    } catch (e) {
      console.error('Load failed', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveData = (data) => {
    setScheduleData(data);
    try {
      localStorage.setItem('shiftbook-data', JSON.stringify(data));
    } catch (e) {
      console.error('Save failed', e);
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const goToPrevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); }
    else { setCurrentMonth(currentMonth - 1); }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); }
    else { setCurrentMonth(currentMonth + 1); }
  };

  const goToToday = () => {
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
  };

  const openDay = (day) => {
    const key = formatDateKey(currentYear, currentMonth, day);
    setSelectedDate(key);
    setNoteDraft(scheduleData[key]?.note || '');
    setEditingShiftIndex(null);
    setShiftDraft({ name: '', amount: '', color: PASTEL_PRESETS[0] });
  };

  const closeModal = () => {
    setSelectedDate(null);
    setEditingShiftIndex(null);
  };

  const startAddShift = () => {
    const dayData = scheduleData[selectedDate] || { shifts: [], note: '' };
    const usedColors = (dayData.shifts || []).map(s => s.color);
    let nextColor = PASTEL_PRESETS[0];
    for (const c of PASTEL_PRESETS) {
      if (!usedColors.includes(c)) { nextColor = c; break; }
    }
    setEditingShiftIndex(-1);
    setShiftDraft({ name: '', amount: '', color: nextColor });
  };

  const startEditShift = (index) => {
    const dayData = scheduleData[selectedDate];
    const shift = dayData.shifts[index];
    const color = shift.color || PASTEL_PRESETS[shift.colorIndex || 0];
    setEditingShiftIndex(index);
    setShiftDraft({ name: shift.name, amount: shift.amount || '', color });
  };

  const saveShift = () => {
    if (!shiftDraft.name.trim()) return;
    const dayData = scheduleData[selectedDate] || { shifts: [], note: '' };
    const newShifts = [...(dayData.shifts || [])];
    const cleanShift = {
      name: shiftDraft.name.trim(),
      amount: shiftDraft.amount === '' ? 0 : Number(shiftDraft.amount),
      color: shiftDraft.color,
    };
    if (editingShiftIndex === -1) {
      if (newShifts.length >= 3) return;
      newShifts.push(cleanShift);
    } else {
      newShifts[editingShiftIndex] = cleanShift;
    }
    saveData({ ...scheduleData, [selectedDate]: { ...dayData, shifts: newShifts } });
    setEditingShiftIndex(null);
    setShiftDraft({ name: '', amount: '', color: PASTEL_PRESETS[0] });
  };

  const deleteShift = (index) => {
    const dayData = scheduleData[selectedDate];
    if (!dayData) return;
    const newShifts = dayData.shifts.filter((_, i) => i !== index);
    const newData = { ...scheduleData, [selectedDate]: { ...dayData, shifts: newShifts } };
    if (newShifts.length === 0 && !dayData.note) {
      delete newData[selectedDate];
    }
    saveData(newData);
  };

  const saveNote = () => {
    const dayData = scheduleData[selectedDate] || { shifts: [], note: '' };
    const newData = { ...scheduleData };
    if (!noteDraft.trim() && (!dayData.shifts || dayData.shifts.length === 0)) {
      delete newData[selectedDate];
    } else {
      newData[selectedDate] = { ...dayData, note: noteDraft.trim() };
    }
    saveData(newData);
  };

  const monthSummary = (() => {
    let total = 0, dutyDays = 0, totalShifts = 0;
    Object.entries(scheduleData).forEach(([key, data]) => {
      if (key.startsWith(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`)) {
        if (data.shifts && data.shifts.length > 0) {
          dutyDays++;
          totalShifts += data.shifts.length;
          data.shifts.forEach(s => { total += Number(s.amount) || 0; });
        }
      }
    });
    return { total, dutyDays, totalShifts };
  })();

  const getShiftColor = (shift) => shift.color || PASTEL_PRESETS[shift.colorIndex || 0];

  // สร้าง map ชื่อเวร → สีล่าสุดที่เคยใช้ จากทุกวันในประวัติ
  const shiftColorMemory = {};
  Object.values(scheduleData).forEach(dayData => {
    (dayData.shifts || []).forEach(shift => {
      if (shift.name && shift.color) {
        shiftColorMemory[shift.name.trim().toUpperCase()] = shift.color;
      }
    });
  });

  const calendarCells = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push({ empty: true, key: `empty-${i}` });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const key = formatDateKey(currentYear, currentMonth, day);
    const dayData = scheduleData[key];
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    const isToday = key === formatDateKey(today.getFullYear(), today.getMonth(), today.getDate());
    const holiday = THAI_HOLIDAYS[key];
    calendarCells.push({
      day, key, dayData, dayOfWeek, isToday, holiday,
      isWeekend: dayOfWeek === 0 || dayOfWeek === 6,
    });
  }

  const selectedDayData = selectedDate ? scheduleData[selectedDate] : null;
  const selectedHoliday = selectedDate ? THAI_HOLIDAYS[selectedDate] : null;
  const selectedDayObj = selectedDate ? new Date(selectedDate) : null;
  const dayTotal = selectedDayData?.shifts?.reduce((sum, s) => sum + (Number(s.amount) || 0), 0) || 0;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FFF5F7 0%, #F0F4FF 100%)' }}>
        <DoctorMascot size={100} />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #FFF5F7 0%, #FFF9F0 25%, #F0F8FF 75%, #F5F0FF 100%)',
      fontFamily: "'Itim', sans-serif"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Itim&display=swap" rel="stylesheet" />

      {/* Floating background characters */}
      <div className="fixed top-20 left-4 md:left-12 opacity-30 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}>
        <IVBag size={70} />
      </div>
      <div className="fixed top-40 right-4 md:right-16 opacity-25 pointer-events-none">
        <HeartECG size={80} />
      </div>
      <div className="fixed bottom-32 left-8 opacity-25 pointer-events-none animate-pulse" style={{ animationDuration: '3s' }}>
        <PillCharacter size={60} />
      </div>
      <div className="fixed bottom-20 right-8 md:right-20 opacity-30 pointer-events-none">
        <AnesthesiaMask size={70} />
      </div>
      <div className="fixed top-1/2 left-2 opacity-20 pointer-events-none hidden md:block">
        <HospitalCross size={50} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-12 z-10">
        <header className="mb-10 text-center relative">
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-[280px] -translate-y-2">
            <DoctorMascot size={90} className="drop-shadow-md" />
          </div>
          <div className="hidden md:block absolute top-2 left-1/2 translate-x-[200px]">
            <HeartECG size={80} />
          </div>

          <div className="md:hidden flex justify-center mb-3">
            <DoctorMascot size={75} />
          </div>

          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 bg-white/70 backdrop-blur-sm rounded-full border border-pink-100 shadow-sm">
            <BookOpen className="w-4 h-4 text-pink-400" />
            <span className="text-xs tracking-widest text-pink-400 uppercase" style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>
              For Medical Heroes
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight" style={{
            fontFamily: "'Mali', sans-serif",
            background: 'linear-gradient(135deg, #E8A4B8 0%, #B8A4D4 50%, #A4C4E8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Shiftbook
          </h1>
          <p className="mt-2 text-base text-stone-500" style={{ fontFamily: "'Mali', sans-serif", fontSize: '1.3rem', fontStyle: 'italic' }}>
            สมุดบันทึกเวรของคุณหมอ ✦
          </p>
        </header>

        <div className="flex items-center justify-between mb-6 bg-white/70 backdrop-blur-md border border-white rounded-3xl px-4 md:px-6 py-4 shadow-sm" style={{ boxShadow: '0 4px 20px rgba(232, 164, 184, 0.08)' }}>
          <button onClick={goToPrevMonth} className="p-2.5 rounded-full hover:bg-pink-50 active:scale-[0.96] transition-[transform,background-color,color] duration-150 text-stone-500 hover:text-pink-500">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-center flex-1">
            <div className="text-xs tracking-widest text-pink-300 uppercase mb-0.5" style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>
              {currentYear + 543}
            </div>
            <div className="text-2xl md:text-3xl text-stone-700" style={{ fontFamily: "'Mali', sans-serif", fontWeight: 500 }}>
              {THAI_MONTHS[currentMonth]}
            </div>
          </div>
          <button onClick={goToNextMonth} className="p-2.5 rounded-full hover:bg-pink-50 active:scale-[0.96] transition-[transform,background-color,color] duration-150 text-stone-500 hover:text-pink-500">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
          <div className="rounded-3xl p-4 md:p-5 shadow-sm border border-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFE5EC 0%, #FFF0F5 100%)' }}>
            <div className="flex items-center gap-2 text-pink-400 mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-[10px] md:text-xs tracking-wider uppercase" style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>วันเข้าเวร</span>
            </div>
            <div className="text-2xl md:text-3xl text-stone-700" style={{ fontFamily: "'Mali', sans-serif", fontWeight: 500 }}>
              {monthSummary.dutyDays} <span className="text-base text-stone-400 font-normal">วัน</span>
            </div>
            <div className="absolute -right-2 -bottom-2 opacity-40">
              <HospitalCross size={45} />
            </div>
          </div>

          <div className="rounded-3xl p-4 md:p-5 shadow-sm border border-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E0E7FF 0%, #F0F4FF 100%)' }}>
            <div className="flex items-center gap-2 text-indigo-400 mb-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-[10px] md:text-xs tracking-wider uppercase" style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>เวรทั้งหมด</span>
            </div>
            <div className="text-2xl md:text-3xl text-stone-700" style={{ fontFamily: "'Mali', sans-serif", fontWeight: 500 }}>
              {monthSummary.totalShifts} <span className="text-base text-stone-400 font-normal">เวร</span>
            </div>
            <div className="absolute -right-1 -bottom-1 opacity-50">
              <AnesthesiaMask size={50} />
            </div>
          </div>

          <div className="rounded-3xl p-4 md:p-5 shadow-sm border border-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #D4F1C5 0%, #E8F5DD 100%)' }}>
            <div className="flex items-center gap-2 text-green-500 mb-2">
              <Wallet className="w-4 h-4" />
              <span className="text-[10px] md:text-xs tracking-wider uppercase" style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>รายได้รวม</span>
            </div>
            <div className="text-xl md:text-3xl text-stone-700" style={{ fontFamily: "'Mali', sans-serif", fontWeight: 500 }}>
              ฿{formatMoney(monthSummary.total)}
            </div>
            <div className="absolute -right-2 -bottom-1 opacity-50">
              <PillCharacter size={50} />
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-md border border-white rounded-3xl p-3 md:p-5 shadow-sm" style={{ boxShadow: '0 4px 20px rgba(180, 164, 212, 0.08)' }}>
          <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2">
            {THAI_DAYS.map((d, i) => (
              <div key={i} className={`text-center py-2 text-xs tracking-widest uppercase ${
                i === 0 ? 'text-pink-400' : i === 6 ? 'text-blue-400' : 'text-stone-400'
              }`} style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 md:gap-2">
            {calendarCells.map((cell) => {
              if (cell.empty) return <div key={cell.key} className="aspect-[1/2] md:aspect-[4/5]" />;
              const { day, key, dayData, dayOfWeek, isToday, holiday, isWeekend } = cell;
              const shifts = dayData?.shifts || [];
              const hasNote = !!dayData?.note;

              return (
                <button
                  key={key}
                  onClick={() => openDay(day)}
                  className={`relative aspect-[1/2] md:aspect-[4/5] p-1 md:p-2 rounded-2xl text-left transition-[transform,box-shadow,border-color,background-color] duration-200 active:scale-[0.96] group border ${
                    isToday ? 'border-pink-300' : holiday ? 'border-pink-100/60' : 'border-white'
                  } hover:shadow-md hover:-translate-y-0.5 hover:border-pink-200`}
                  style={{
                    background: isToday
                      ? 'linear-gradient(135deg, #FFD6E0 0%, #FFE5EC 100%)'
                      : holiday ? 'rgba(255, 245, 247, 0.7)'
                      : isWeekend ? 'rgba(255, 255, 255, 0.5)'
                      : 'rgba(255, 255, 255, 0.85)',
                  }}
                >
                  {isToday && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <DoctorMascot size={28} />
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-1">
                    <span className={`text-sm md:text-base ${
                      isToday ? 'text-pink-600' :
                      dayOfWeek === 0 ? 'text-pink-400' :
                      dayOfWeek === 6 ? 'text-blue-400' : 'text-stone-600'
                    }`} style={{ fontFamily: "'Mali', sans-serif", fontWeight: 500 }}>
                      {day}
                    </span>
                    {hasNote && <StickyNote className="w-3 h-3 text-amber-400" />}
                  </div>

                  {holiday && (
                    <>
                      <div className="md:hidden w-1.5 h-1.5 rounded-full bg-pink-400/60 mb-0.5" />
                      <div className="hidden md:block text-[11px] leading-tight mb-1 line-clamp-1 text-pink-500/80">
                        {holiday}
                      </div>
                    </>
                  )}

                  <div className="space-y-0.5 md:space-y-1">
                    {shifts.slice(0, 3).map((shift, idx) => {
                      const bgColor = getShiftColor(shift);
                      const textColor = getTextColor(bgColor);
                      return (
                        <div key={idx} className="text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-[3px] rounded-xl md:rounded-lg break-words"
                          style={{ backgroundColor: bgColor, color: textColor, fontWeight: 600, lineHeight: 1.4 }}>
                          {shift.name}
                        </div>
                      );
                    })}
                  </div>

                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button onClick={goToToday}
            className="text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-pink-500 transition-[transform,color,border-color] duration-150 active:scale-[0.96] px-4 py-2 border-b border-stone-200 hover:border-pink-300"
            style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>
            ← กลับไปวันนี้
          </button>
        </div>

        <footer className="mt-12 text-center text-xs text-stone-400 tracking-wider flex items-center justify-center gap-3" style={{ fontFamily: "'Itim', sans-serif" }}>
          <IVBag size={30} />
          <span>แตะที่วันใดก็ได้เพื่อเพิ่มเวร · บันทึกอัตโนมัติ</span>
          <PillCharacter size={30} />
        </footer>
      </div>

      {selectedDate && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center backdrop-blur-md p-0 md:p-4"
          style={{ background: 'rgba(232, 164, 184, 0.2)' }} onClick={closeModal}>
          <div className="w-full md:max-w-md rounded-t-[2rem] md:rounded-[2rem] shadow-2xl max-h-[92vh] overflow-y-auto border-2 border-white relative"
            style={{ background: 'linear-gradient(135deg, #FFFAFB 0%, #FFF8F2 100%)' }}
            onClick={(e) => e.stopPropagation()}>

            <div className="absolute top-2 right-14 opacity-80">
              <DoctorMascot size={50} />
            </div>

            <div className="sticky top-0 backdrop-blur-md border-b border-pink-100 px-6 py-4 flex items-start justify-between z-10" style={{ background: 'rgba(255, 250, 251, 0.95)' }}>
              <div>
                <div className="text-xs tracking-widest text-pink-400 uppercase mb-1" style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>
                  วัน{THAI_DAYS_FULL[selectedDayObj.getDay()]}
                </div>
                <div className="text-2xl text-stone-700" style={{ fontFamily: "'Mali', sans-serif", fontWeight: 500 }}>
                  {selectedDayObj.getDate()} {THAI_MONTHS[selectedDayObj.getMonth()]} {selectedDayObj.getFullYear() + 543}
                </div>
                {selectedHoliday && (
                  <div className="mt-2 inline-block px-3 py-1 text-pink-600 text-xs rounded-full" style={{ background: 'linear-gradient(135deg, #FFE5EC 0%, #FFF0F5 100%)' }}>
                    🌸 {selectedHoliday}
                  </div>
                )}
              </div>
              <button onClick={closeModal} className="p-2 rounded-full hover:bg-pink-50 text-stone-500 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-5 space-y-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs tracking-widest text-stone-500 uppercase" style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>
                    เวรของวันนี้ ({(selectedDayData?.shifts?.length || 0)}/3)
                  </h3>
                  {dayTotal > 0 && (
                    <span className="text-sm text-green-600" style={{ fontFamily: "'Mali', sans-serif", fontWeight: 500 }}>
                      รวม ฿{formatMoney(dayTotal)}
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-3">
                  {(selectedDayData?.shifts || []).map((shift, idx) => {
                    const bgColor = getShiftColor(shift);
                    const textColor = getTextColor(bgColor);
                    if (editingShiftIndex === idx) {
                      return <ShiftForm key={idx} draft={shiftDraft} setDraft={setShiftDraft} onSave={saveShift} onCancel={() => setEditingShiftIndex(null)} colorMemory={shiftColorMemory} />;
                    }
                    return (
                      <div key={idx} className="rounded-2xl p-3 flex items-center justify-between gap-3 border border-white shadow-sm" style={{ backgroundColor: bgColor }}>
                        <button onClick={() => startEditShift(idx)} className="flex-1 text-left flex items-center gap-3 min-w-0">
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: textColor, opacity: 0.6 }} />
                          <div className="min-w-0 flex-1">
                            <div className="font-medium truncate" style={{ color: textColor }}>{shift.name}</div>
                            {shift.amount > 0 && (
                              <div className="text-sm" style={{ color: textColor, opacity: 0.7, fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>
                                ฿{formatMoney(shift.amount)}
                              </div>
                            )}
                          </div>
                        </button>
                        <button onClick={() => deleteShift(idx)} className="p-1 rounded-full hover:bg-white/40 transition-all" style={{ color: textColor, opacity: 0.6 }}>
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}

                  {editingShiftIndex === -1 && (
                    <ShiftForm draft={shiftDraft} setDraft={setShiftDraft} onSave={saveShift} onCancel={() => setEditingShiftIndex(null)} colorMemory={shiftColorMemory} />
                  )}
                </div>

                {editingShiftIndex === null && (selectedDayData?.shifts?.length || 0) < 3 && (
                  <button onClick={startAddShift}
                    className="w-full py-3 border-2 border-dashed border-pink-200 rounded-2xl text-pink-400 hover:border-pink-400 hover:text-pink-500 hover:bg-pink-50/50 transition-all flex items-center justify-center gap-2 group">
                    <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                    <span className="text-sm font-medium">เพิ่มเวร</span>
                  </button>
                )}

                {(selectedDayData?.shifts?.length || 0) >= 3 && editingShiftIndex === null && (
                  <div className="text-center text-xs text-stone-400 py-2 flex items-center justify-center gap-2">
                    <HospitalCross size={20} />
                    <span>ครบ 3 เวรแล้ว · กดที่เวรเพื่อแก้ไข</span>
                  </div>
                )}
              </div>

              <div className="border-t border-pink-100 pt-5">
                <label className="block text-xs tracking-widest text-stone-500 uppercase mb-2" style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>
                  📝 โน๊ตประจำวัน
                </label>
                <textarea value={noteDraft} onChange={(e) => setNoteDraft(e.target.value)} onBlur={saveNote}
                  placeholder="จดอะไรก็ได้สั้นๆ..." rows={2}
                  className="w-full px-3 py-2.5 bg-white/80 border border-pink-100 rounded-2xl text-stone-700 placeholder-stone-300 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all resize-none text-sm"
                  style={{ fontFamily: "'Itim', sans-serif" }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ShiftForm({ draft, setDraft, onSave, onCancel, colorMemory = {} }) {
  const textColor = getTextColor(draft.color);
  const rememberedColor = colorMemory[draft.name.trim().toUpperCase()];

  useEffect(() => {
    const key = draft.name.trim().toUpperCase();
    const mem = colorMemory[key];
    if (key && mem && mem !== draft.color) {
      setDraft(prev => ({ ...prev, color: mem }));
    }
  }, [draft.name]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-white border-2 border-pink-200 rounded-2xl p-3 space-y-3 shadow-md">
      <input type="text" value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })}
        placeholder="ชื่อเวร เช่น OR, ER, OPD, ICU..." autoFocus
        className="w-full px-3 py-2 bg-pink-50/50 border border-pink-100 rounded-xl text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-400 text-sm" />
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">฿</span>
        <input type="number" value={draft.amount} onChange={(e) => setDraft({ ...draft, amount: e.target.value })}
          placeholder="จำนวนเงิน"
          className="w-full pl-7 pr-3 py-2 bg-pink-50/50 border border-pink-100 rounded-xl text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-400 text-sm"
          style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }} />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="text-[10px] text-stone-400" style={{ fontFamily: "'Itim', sans-serif" }}>เลือกสี</div>
            {rememberedColor && (
              <span className="flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-stone-100 text-stone-500">
                <span className="w-2 h-2 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: rememberedColor }} />
                จำสีเดิมได้
              </span>
            )}
          </div>
          <div className="px-2 py-0.5 rounded-md text-[10px] font-medium" style={{ backgroundColor: draft.color, color: textColor }}>
            {draft.name || 'preview'}
          </div>
        </div>
        <div className="grid grid-cols-6 gap-1.5 mb-2">
          {PASTEL_PRESETS.map((c) => (
            <button key={c} onClick={() => setDraft({ ...draft, color: c })}
              className={`aspect-square rounded-full border-2 transition-all ${
                draft.color === c ? 'border-stone-700 scale-110 shadow-md' : 'border-white hover:border-stone-300'
              }`} style={{ backgroundColor: c }} />
          ))}
        </div>
        <label className="flex items-center gap-2 px-3 py-2 bg-pink-50/50 border border-pink-100 rounded-xl cursor-pointer hover:bg-pink-50 transition-colors">
          <input type="color" value={draft.color} onChange={(e) => setDraft({ ...draft, color: e.target.value })}
            className="w-8 h-8 rounded-full cursor-pointer border-0 p-0" style={{ background: 'transparent' }} />
          <span className="text-xs text-stone-500 flex-1" style={{ fontFamily: "'Itim', sans-serif", fontWeight: 500 }}>🎨 เลือกสีเอง</span>
          <span className="text-[10px] text-stone-400 uppercase" style={{ fontFamily: "'Itim', sans-serif", fontWeight: 600 }}>{draft.color}</span>
        </label>
      </div>
      <div className="flex gap-2 pt-1">
        <button onClick={onCancel} className="flex-1 py-2 text-stone-500 hover:text-stone-700 text-sm transition-colors">ยกเลิก</button>
        <button onClick={onSave} disabled={!draft.name.trim()}
          className="flex-1 py-2 disabled:bg-stone-200 disabled:cursor-not-allowed disabled:text-stone-400 text-white rounded-xl text-sm font-medium transition-all hover:shadow-md"
          style={{ background: !draft.name.trim() ? undefined : 'linear-gradient(135deg, #E8A4B8 0%, #B8A4D4 100%)' }}>
          บันทึก
        </button>
      </div>
    </div>
  );
}
