"use client";
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Friday Breakfast Rotation · Main Street Capital</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --main-navy: #035804;
    --main-navy-deep: #023a03;
    --main-navy-light: #057506;
    --main-gold: #bcd7c8;
    --main-gold-bright: #d4e8dc;
    --main-gold-accent: #8fb89e;
    --cream: #f1f7f3;
    --paper: #fafcfa;
    --ink: #1a1a1a;
    --ink-soft: #4a4a4a;
    --rule: rgba(3, 88, 4, 0.12);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Inter', sans-serif;
    background: var(--paper);
    color: var(--ink);
    min-height: 100vh;
    background-image:
      radial-gradient(circle at 20% 0%, rgba(3, 88, 4, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 80% 100%, rgba(143, 184, 158, 0.08) 0%, transparent 50%);
  }
  .masthead {
    background: linear-gradient(135deg, var(--main-navy-deep) 0%, var(--main-navy) 100%);
    color: var(--cream);
    padding: 32px 48px 28px;
    position: relative;
    overflow: hidden;
    border-bottom: 3px solid var(--main-gold-accent);
  }
  .masthead::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(188, 215, 200, 0.04) 35px, rgba(188, 215, 200, 0.04) 36px);
    pointer-events: none;
  }
  .masthead-inner {
    max-width: 1400px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px; flex-wrap: wrap; position: relative;
  }
  .brand-block { display: flex; align-items: center; gap: 22px; }
  .main-logo { display: flex; align-items: center; gap: 14px; padding-right: 22px; border-right: 1px solid rgba(188, 215, 200, 0.25); }
  .main-logo-mark {
    display: grid; place-items: center;
    width: 58px; height: 58px;
    background: var(--main-gold); color: var(--main-navy-deep);
    border-radius: 2px;
    font-family: 'Fraunces', serif; font-weight: 700;
    font-size: 32px; letter-spacing: -2px; line-height: 1;
  }
  .main-logo-text { font-family: 'Fraunces', serif; line-height: 1.05; }
  .main-logo-text .row1 { font-size: 18px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--cream); }
  .main-logo-text .row2 { font-size: 11px; letter-spacing: 0.32em; text-transform: uppercase; color: var(--main-gold-bright); margin-top: 4px; font-family: 'JetBrains Mono', monospace; font-weight: 400; }
  .brand-text .eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--main-gold-bright); margin-bottom: 4px; }
  .brand-text h1 { font-family: 'Fraunces', serif; font-weight: 400; font-size: 30px; line-height: 1; letter-spacing: -0.02em; }
  .brand-text h1 em { font-style: italic; color: var(--main-gold-bright); font-weight: 500; }
  .meta-block { text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(245, 247, 243, 0.7); letter-spacing: 0.05em; }
  .meta-block .live { color: var(--main-gold-bright); font-size: 12px; font-weight: 500; }
  .meta-block .live::before { content: '●'; color: #4ade80; margin-right: 6px; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

  main { max-width: 1400px; margin: 0 auto; padding: 36px 48px 64px; }
  .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }
  .stat { background: white; padding: 20px 22px; border-left: 3px solid var(--main-navy); border-radius: 2px; box-shadow: 0 1px 3px rgba(3,88,4,0.06); transition: all 0.3s ease; display: flex; align-items: center; gap: 16px; }
  .stat:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(3,88,4,0.1); border-left-color: var(--main-gold-accent); }
  .stat-icon { flex-shrink: 0; }
  .stat-body { flex: 1; min-width: 0; }
  .stat .label { font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--ink-soft); margin-bottom: 6px; }
  .stat .value { font-family: 'Fraunces', serif; font-size: 26px; font-weight: 500; color: var(--main-navy); line-height: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .stat .sub { font-size: 11px; color: var(--ink-soft); margin-top: 6px; }

  .tab-bar { display: flex; gap: 4px; border-bottom: 1px solid var(--rule); margin-bottom: 28px; flex-wrap: wrap; }
  .tab { padding: 12px 20px; background: transparent; border: none; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; color: var(--ink-soft); cursor: pointer; position: relative; transition: color 0.2s; letter-spacing: 0.02em; }
  .tab::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 2px; background: var(--main-navy); transform: scaleX(0); transition: transform 0.25s ease; }
  .tab:hover { color: var(--main-navy); }
  .tab.active { color: var(--main-navy); font-weight: 600; }
  .tab.active::after { transform: scaleX(1); }

  .panel { display: none; animation: fadeIn 0.4s ease; }
  .panel.active { display: block; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

  .section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 20px; border-bottom: 2px solid var(--main-navy); padding-bottom: 8px; flex-wrap: wrap; gap: 12px; }
  .section-head h2 { font-family: 'Fraunces', serif; font-weight: 500; font-size: 22px; color: var(--main-navy); letter-spacing: -0.01em; }
  .section-head .tag { font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--ink-soft); }

  .schedule-controls { display: flex; gap: 12px; margin-bottom: 20px; align-items: center; flex-wrap: wrap; }
  .filter-pill { padding: 6px 14px; background: white; border: 1px solid var(--rule); border-radius: 100px; font-size: 12px; font-weight: 500; color: var(--ink-soft); cursor: pointer; transition: all 0.2s; font-family: 'Inter', sans-serif; }
  .filter-pill:hover { border-color: var(--main-navy); color: var(--main-navy); }
  .filter-pill.active { background: var(--main-navy); color: var(--cream); border-color: var(--main-navy); }
  .search-input { padding: 6px 14px; border: 1px solid var(--rule); border-radius: 100px; font-size: 12px; font-family: 'Inter', sans-serif; color: var(--ink); background: white; width: 200px; outline: none; transition: border-color 0.2s; }
  .search-input:focus { border-color: var(--main-navy); }

  .schedule-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
  .week-card { background: white; border: 1px solid var(--rule); padding: 16px; border-radius: 4px; cursor: pointer; transition: all 0.25s ease; position: relative; overflow: hidden; }
  .week-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--main-navy); transition: width 0.25s ease; }
  .week-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(3,88,4,0.1); border-color: var(--main-navy); }
  .week-card:hover::before { width: 6px; background: var(--main-gold-accent); }
  .week-card.next-up { border-color: var(--main-gold-accent); background: linear-gradient(135deg, rgba(188,215,200,0.2) 0%, white 100%); }
  .week-card.next-up::before { background: var(--main-gold-accent); width: 6px; }
  .week-card.past { opacity: 0.55; }
  .wc-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
  .wc-date { font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-soft); }
  .wc-badge { font-family: 'JetBrains Mono', monospace; font-size: 9px; padding: 3px 7px; background: var(--main-navy); color: var(--main-gold-bright); font-weight: 600; letter-spacing: 0.1em; border-radius: 2px; }
  .wc-badge.past-badge { background: var(--rule); color: var(--ink-soft); }
  .wc-main { display: flex; align-items: center; gap: 12px; }
  .wc-logo { flex-shrink: 0; }
  .wc-place { font-family: 'Fraunces', serif; font-size: 17px; font-weight: 500; color: var(--main-navy); line-height: 1.2; letter-spacing: -0.01em; }
  .wc-rank { margin-top: 10px; font-size: 11px; color: var(--ink-soft); display: flex; align-items: center; gap: 6px; }
  .rank-dot { display: inline-block; width: 6px; height: 6px; background: var(--main-gold-accent); border-radius: 50%; }

  /* CALENDAR */
  .cal-toolbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; gap: 16px; flex-wrap: wrap; }
  .cal-nav { display: flex; align-items: center; gap: 12px; }
  .cal-btn { background: white; border: 1px solid var(--rule); width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: grid; place-items: center; color: var(--main-navy); transition: all 0.2s; font-family: 'Fraunces', serif; font-size: 18px; }
  .cal-btn:hover { background: var(--main-navy); color: var(--cream); border-color: var(--main-navy); }
  .cal-title { font-family: 'Fraunces', serif; font-size: 26px; font-weight: 500; color: var(--main-navy); letter-spacing: -0.01em; min-width: 220px; text-align: center; }
  .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: var(--rule); border: 1px solid var(--rule); border-radius: 4px; overflow: hidden; }
  .cal-dayhead { background: var(--main-navy); color: var(--cream); padding: 12px 8px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; }
  .cal-cell { background: white; aspect-ratio: 1 / 0.9; padding: 8px; position: relative; display: flex; flex-direction: column; transition: background 0.2s; min-height: 70px; }
  .cal-cell.empty { background: var(--cream); opacity: 0.4; }
  .cal-cell.friday { cursor: pointer; }
  .cal-cell.friday:hover { background: rgba(188, 215, 200, 0.25); }
  .cal-cell.today { background: rgba(188, 215, 200, 0.35); box-shadow: inset 0 0 0 2px var(--main-gold-accent); }
  .cal-cell.next-up { background: linear-gradient(135deg, rgba(188,215,200,0.4), white); box-shadow: inset 0 0 0 2px var(--main-navy); }
  .cal-cell.past-friday { opacity: 0.55; }
  .cal-daynum { font-family: 'Fraunces', serif; font-size: 13px; font-weight: 500; color: var(--ink); }
  .cal-cell.friday .cal-daynum { color: var(--main-navy); font-weight: 600; }
  .cal-event { margin-top: auto; display: flex; align-items: center; gap: 4px; }
  .cal-event-logo { flex-shrink: 0; }
  .cal-event-label { font-size: 9px; color: var(--main-navy); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 1; }

  .rank-table { background: white; border: 1px solid var(--rule); border-radius: 4px; overflow: hidden; }
  .rank-row { display: grid; grid-template-columns: 60px 56px 1fr 200px 100px; align-items: center; padding: 14px 20px; border-bottom: 1px solid var(--rule); transition: background 0.2s; gap: 12px; }
  .rank-row:last-child { border-bottom: none; }
  .rank-row:hover { background: var(--cream); }
  .rank-row.head { background: var(--main-navy); color: var(--cream); font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; }
  .rank-row.head:hover { background: var(--main-navy); }
  .rank-num { font-family: 'Fraunces', serif; font-size: 28px; font-weight: 500; color: var(--main-navy); }
  .rank-row.head .rank-num, .rank-row.head .rank-name, .rank-row.head .rank-logo-col { color: var(--cream); font-size: 10px; font-family: 'JetBrains Mono', monospace; font-weight: 400; }
  .rank-name { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 500; color: var(--ink); }
  .rank-bar-wrap { background: var(--rule); height: 6px; border-radius: 100px; overflow: hidden; }
  .rank-bar { height: 100%; background: linear-gradient(90deg, var(--main-navy) 0%, var(--main-gold-accent) 100%); border-radius: 100px; transition: width 1s cubic-bezier(0.4, 0, 0.2, 1); }
  .rank-score { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500; color: var(--main-navy); text-align: right; }
  .rank-row.head .rank-score, .rank-row.head .rank-bar-wrap { color: var(--cream); background: transparent; }

  .two-col { display: grid; grid-template-columns: 1.2fr 1fr; gap: 32px; margin-top: 32px; }
  .chart-wrap { background: white; border: 1px solid var(--rule); padding: 24px; border-radius: 4px; }
  .chart-wrap h3 { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 500; color: var(--main-navy); margin-bottom: 18px; }

  .voter-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; }
  .voter-card { background: white; border: 1px solid var(--rule); padding: 16px; border-radius: 4px; cursor: pointer; transition: all 0.25s ease; }
  .voter-card:hover { transform: translateY(-2px); border-color: var(--main-navy); box-shadow: 0 6px 18px rgba(3,88,4,0.08); }
  .voter-card.selected { border-color: var(--main-gold-accent); background: linear-gradient(135deg, rgba(188,215,200,0.18), white); }
  .voter-name { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 500; color: var(--main-navy); margin-bottom: 4px; }
  .voter-status { font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; }
  .voter-status.voted { color: #035804; }
  .voter-status.pending { color: #8fb89e; }
  .voter-pick { margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--rule); font-size: 12px; color: var(--ink-soft); }
  .voter-pick strong { color: var(--main-navy); }

  .modal-backdrop { position: fixed; inset: 0; background: rgba(2, 58, 3, 0.55); z-index: 100; display: none; align-items: center; justify-content: center; padding: 24px; animation: fadeIn 0.2s ease; }
  .modal-backdrop.open { display: flex; }
  .modal { background: white; border-radius: 8px; width: 100%; max-width: 560px; max-height: 90vh; overflow-y: auto; box-shadow: 0 24px 60px rgba(2,58,3,0.3); animation: slideUp 0.3s ease; }
  @keyframes slideUp { from { opacity:0; transform: translateY(20px);} to {opacity:1; transform: translateY(0);} }
  .modal-head { padding: 22px 28px; border-bottom: 1px solid var(--rule); background: linear-gradient(135deg, var(--main-navy-deep), var(--main-navy)); color: var(--cream); border-radius: 8px 8px 0 0; }
  .modal-head .eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: var(--main-gold-bright); margin-bottom: 4px; }
  .modal-head h3 { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 500; letter-spacing: -0.01em; }
  .modal-body { padding: 24px 28px; }
  .modal-foot { padding: 16px 28px; border-top: 1px solid var(--rule); display: flex; justify-content: space-between; gap: 12px; align-items: center; background: var(--cream); border-radius: 0 0 8px 8px; }

  .btn { padding: 10px 20px; border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; border: 1px solid transparent; transition: all 0.2s; letter-spacing: 0.02em; }
  .btn-primary { background: var(--main-navy); color: var(--cream); }
  .btn-primary:hover { background: var(--main-navy-deep); }
  .btn-ghost { background: transparent; color: var(--main-navy); border-color: var(--rule); }
  .btn-ghost:hover { background: white; border-color: var(--main-navy); }

  .form-group { margin-bottom: 16px; }
  .form-label { display: block; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--ink-soft); margin-bottom: 6px; }
  .form-input, .form-select { width: 100%; padding: 10px 12px; border: 1px solid var(--rule); border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 14px; color: var(--ink); background: white; outline: none; transition: border-color 0.2s; }
  .form-input:focus, .form-select:focus { border-color: var(--main-navy); }

  .rank-list { list-style: none; border: 1px solid var(--rule); border-radius: 4px; overflow: hidden; }
  .rank-item { background: white; padding: 12px 14px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--rule); cursor: grab; transition: background 0.15s; user-select: none; }
  .rank-item:last-child { border-bottom: none; }
  .rank-item:hover { background: var(--cream); }
  .rank-item.dragging { opacity: 0.4; background: var(--main-gold-bright); }
  .rank-item.drag-over { border-top: 2px solid var(--main-navy); }
  .rank-handle { color: var(--main-gold-accent); font-size: 18px; line-height: 1; cursor: grab; }
  .rank-position { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; color: var(--main-navy); width: 24px; text-align: center; }
  .rank-item-name { flex: 1; font-family: 'Fraunces', serif; font-size: 15px; color: var(--ink); }

  .menu-tabs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
  .menu-tab { padding: 8px 14px; background: white; border: 1px solid var(--rule); border-radius: 2px; font-size: 12px; font-weight: 500; color: var(--ink-soft); cursor: pointer; transition: all 0.2s; font-family: 'Inter', sans-serif; display: flex; align-items: center; gap: 8px; }
  .menu-tab:hover { border-color: var(--main-navy); color: var(--main-navy); }
  .menu-tab.active { background: var(--main-navy); color: var(--cream); border-color: var(--main-navy); }

  .menu-card { background: white; border: 1px solid var(--rule); border-top: 3px solid var(--main-gold-accent); padding: 24px; border-radius: 4px; }
  .menu-card-head { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--rule); }
  .menu-card-title-block { flex: 1; }
  .menu-card h3 { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 500; color: var(--main-navy); letter-spacing: -0.01em; }
  .menu-sub { font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--ink-soft); margin-top: 4px; }
  .menu-list { list-style: none; }
  .menu-item { display: grid; grid-template-columns: 32px 1fr 60px 24px; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--rule); gap: 12px; }
  .menu-item:last-child { border-bottom: none; }
  .menu-rank-num { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; color: var(--main-navy); }
  .menu-name { font-size: 14px; color: var(--ink); }
  .menu-stars { font-size: 11px; color: var(--main-gold-accent); text-align: right; letter-spacing: 1px; }
  .menu-del { background: transparent; border: none; color: var(--ink-soft); cursor: pointer; font-size: 16px; line-height: 1; opacity: 0.4; transition: opacity 0.2s; }
  .menu-del:hover { opacity: 1; color: #c0392b; }
  .menu-empty { font-size: 13px; color: var(--ink-soft); font-style: italic; padding: 24px 0; text-align: center; }
  .menu-add-form { display: flex; gap: 8px; margin-top: 16px; padding-top: 16px; border-top: 1px dashed var(--rule); flex-wrap: wrap; }
  .menu-add-form input { flex: 1; min-width: 140px; }

  .toast { position: fixed; bottom: 24px; right: 24px; background: var(--main-navy-deep); color: var(--cream); padding: 14px 20px; border-radius: 4px; box-shadow: 0 12px 30px rgba(2,58,3,0.3); font-size: 13px; font-weight: 500; z-index: 200; opacity: 0; transform: translateY(20px); transition: all 0.3s ease; border-left: 3px solid var(--main-gold-accent); }
  .toast.show { opacity: 1; transform: translateY(0); }

  footer { max-width: 1400px; margin: 32px auto 0; padding: 24px 48px; border-top: 1px solid var(--rule); display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--ink-soft); }

  @media (max-width: 900px) {
    .masthead, main, footer { padding-left: 24px; padding-right: 24px; }
    .stats-row { grid-template-columns: repeat(2, 1fr); }
    .two-col { grid-template-columns: 1fr; }
    .rank-row { grid-template-columns: 40px 40px 1fr 80px; gap: 8px; }
    .rank-row .rank-bar-wrap { display: none; }
    .cal-cell { padding: 4px; aspect-ratio: 1 / 1; min-height: 50px; }
    .cal-event-label { display: none; }
  }
</style>
</head>
<body>

<header class="masthead">
  <div class="masthead-inner">
    <div class="brand-block">
      <div class="main-logo">
        <div class="main-logo-mark">M</div>
        <div class="main-logo-text">
          <div class="row1">Main Street</div>
          <div class="row2">Capital · MAIN</div>
        </div>
      </div>
      <div class="brand-text">
        <div class="eyebrow">Internal · Houston Office</div>
        <h1>Friday Breakfast <em>Rotation</em></h1>
      </div>
    </div>
    <div class="meta-block">
      <div class="live">2026 SEASON · ACTIVE</div>
      <div id="masthead-date">—</div>
    </div>
  </div>
</header>

<main>
  <section class="stats-row">
    <div class="stat">
      <div class="stat-icon" id="stat-next-logo"></div>
      <div class="stat-body">
        <div class="label">Next Up</div>
        <div class="value" id="stat-next">—</div>
        <div class="sub" id="stat-next-date">—</div>
      </div>
    </div>
    <div class="stat">
      <div class="stat-icon" id="stat-top-logo"></div>
      <div class="stat-body">
        <div class="label">Top Ranked</div>
        <div class="value" id="stat-top">—</div>
        <div class="sub" id="stat-top-score">—</div>
      </div>
    </div>
    <div class="stat">
      <div class="stat-body">
        <div class="label">Weeks Logged</div>
        <div class="value" id="stat-weeks">—</div>
        <div class="sub">of 52 fridays</div>
      </div>
    </div>
    <div class="stat">
      <div class="stat-body">
        <div class="label">Voters In</div>
        <div class="value" id="stat-voters">—</div>
        <div class="sub" id="stat-voters-sub">team members submitted</div>
      </div>
    </div>
  </section>

  <nav class="tab-bar">
    <button class="tab active" data-panel="calendar">Calendar</button>
    <button class="tab" data-panel="schedule">Schedule</button>
    <button class="tab" data-panel="rankings">Rankings</button>
    <button class="tab" data-panel="voters">Voters</button>
    <button class="tab" data-panel="menus">Menu Picks</button>
  </nav>

  <section class="panel active" data-panel="calendar">
    <div class="section-head">
      <h2>2026 Calendar</h2>
      <span class="tag">Click any Friday for details</span>
    </div>
    <div class="cal-toolbar">
      <div class="cal-nav">
        <button class="cal-btn" id="cal-prev">‹</button>
        <div class="cal-title" id="cal-title">—</div>
        <button class="cal-btn" id="cal-next">›</button>
      </div>
      <button class="filter-pill active" id="cal-today">Jump to Today</button>
    </div>
    <div class="cal-grid" id="cal-grid"></div>
  </section>

  <section class="panel" data-panel="schedule">
    <div class="section-head">
      <h2>The Lineup</h2>
      <span class="tag">52 Fridays · 6 Spots</span>
    </div>
    <div class="schedule-controls">
      <button class="filter-pill active" data-filter="all">All</button>
      <button class="filter-pill" data-filter="upcoming">Upcoming</button>
      <button class="filter-pill" data-filter="past">Past</button>
      <input class="search-input" id="schedule-search" placeholder="Search a spot..." />
    </div>
    <div class="schedule-grid" id="schedule-grid"></div>
  </section>

  <section class="panel" data-panel="rankings">
    <div class="section-head">
      <h2>Overall Rankings</h2>
      <span class="tag">Avg Across Submitted Ballots</span>
    </div>
    <div class="rank-table" id="rank-table"></div>
    <div class="two-col">
      <div class="chart-wrap">
        <h3>Visit Frequency</h3>
        <svg id="freq-chart" viewBox="0 0 600 300" style="width:100%;height:auto;"></svg>
      </div>
      <div class="chart-wrap">
        <h3>Score Distribution</h3>
        <svg id="dist-chart" viewBox="0 0 400 300" style="width:100%;height:auto;"></svg>
      </div>
    </div>
  </section>

  <section class="panel" data-panel="voters">
    <div class="section-head">
      <h2>Who's Voted</h2>
      <button class="btn btn-primary" id="open-vote-btn">+ Submit Ranking</button>
    </div>
    <div class="voter-grid" id="voter-grid"></div>
  </section>

  <section class="panel" data-panel="menus">
    <div class="section-head">
      <h2>Menu Picks by Spot</h2>
      <span class="tag">Drop notes as you go</span>
    </div>
    <div class="menu-tabs" id="menu-tabs"></div>
    <div class="menu-card" id="menu-card"></div>
  </section>
</main>

<div class="modal-backdrop" id="vote-modal">
  <div class="modal">
    <div class="modal-head">
      <div class="eyebrow">Personal Ballot</div>
      <h3>Rank Your Breakfast Spots</h3>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label class="form-label">Your Name</label>
        <input type="text" class="form-input" id="vote-name" placeholder="Type your name (e.g. Jordan)" autocomplete="off" />
      </div>
      <div class="form-group">
        <label class="form-label">Drag to rank · 1 = favorite</label>
        <ul class="rank-list" id="vote-ranklist"></ul>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn btn-ghost" id="vote-cancel">Cancel</button>
      <button class="btn btn-primary" id="vote-save">Submit Ranking</button>
    </div>
  </div>
</div>

<div class="modal-backdrop" id="day-modal">
  <div class="modal">
    <div class="modal-head">
      <div class="eyebrow" id="day-eyebrow">—</div>
      <h3 id="day-title">—</h3>
    </div>
    <div class="modal-body" id="day-body"></div>
    <div class="modal-foot">
      <button class="btn btn-ghost" id="day-close">Close</button>
    </div>
  </div>
</div>

<div class="toast" id="toast">Saved.</div>

<footer>
  <span>Main St. Capital · Internal · 2026</span>
  <span>Friday · 8:00 AM · Conference Room</span>
</footer>

<script>
const LOGOS = {
  "Taco Deli": (s=40) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" fill="#e8a04a" stroke="#a0521a" stroke-width="1"/><path d="M 6 24 Q 20 4 34 24 Z" fill="#f5cb5c" stroke="#a0521a" stroke-width="1.5"/><ellipse cx="14" cy="20" rx="2.5" ry="1.5" fill="#7a3e0f"/><ellipse cx="22" cy="18" rx="2" ry="1.2" fill="#a83d2b"/><ellipse cx="27" cy="21" rx="2" ry="1.3" fill="#3d5e2a"/><circle cx="18" cy="22" r="0.8" fill="#7a3e0f"/></svg>`,
  "Kolache Shop": (s=40) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" fill="#fde4a4"/><ellipse cx="20" cy="22" rx="13" ry="10" fill="#d4a350" stroke="#8a5a1c" stroke-width="1"/><ellipse cx="20" cy="20" rx="6" ry="4.5" fill="#a83d2b"/></svg>`,
  "Torchy's": (s=40) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" fill="#c0392b"/><path d="M 20 8 Q 14 14 16 22 Q 18 28 20 32 Q 22 28 24 22 Q 26 14 20 8 Z" fill="#f5cb5c"/><path d="M 20 12 Q 17 16 18 22 Q 19 26 20 28 Q 21 26 22 22 Q 23 16 20 12 Z" fill="#e8702c"/><ellipse cx="20" cy="34" rx="4" ry="1.5" fill="#3a1f0f"/></svg>`,
  "Goode Co.": (s=40) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" fill="#1a1a1a"/><text x="20" y="17" text-anchor="middle" font-family="Georgia, serif" font-size="10" font-weight="700" fill="#d4a350" letter-spacing="-0.5">GOODE</text><line x1="9" y1="20" x2="31" y2="20" stroke="#d4a350" stroke-width="0.6"/><text x="20" y="30" text-anchor="middle" font-family="Georgia, serif" font-size="9" font-style="italic" fill="#d4a350">Co.</text></svg>`,
  "Island Grill": (s=40) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" fill="#2ba6a0"/><path d="M 20 6 Q 14 12 14 20 Q 14 28 20 34 Q 26 28 26 20 Q 26 12 20 6 Z" fill="#5cc7b0"/><ellipse cx="20" cy="20" rx="3" ry="6" fill="#2ba6a0"/><path d="M 8 22 Q 14 18 20 22 Q 26 26 32 22" stroke="#fde4a4" stroke-width="1.5" fill="none" opacity="0.7"/></svg>`,
  "Chick-Fil-A": (s=40) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" fill="#dd0031"/><path d="M 14 22 Q 12 18 14 14 Q 18 11 22 13 Q 26 14 27 18 Q 27 20 26 21 L 28 21 Q 30 22 28 24 L 26 23 Q 25 26 22 27 Q 17 28 14 25 Q 13 24 14 22 Z" fill="white"/><circle cx="23" cy="17" r="0.9" fill="#dd0031"/><path d="M 14 22 L 11 20 L 10 22 L 11 24 Z" fill="white" opacity="0.9"/></svg>`
};

const SCHEDULE = [
  ['2026-01-02','Taco Deli'],['2026-01-09','Kolache Shop'],['2026-01-16',"Torchy's"],
  ['2026-01-23','Goode Co.'],['2026-01-30','Island Grill'],['2026-02-06','Chick-Fil-A'],
  ['2026-02-13','Taco Deli'],['2026-02-20','Kolache Shop'],['2026-02-27',"Torchy's"],
  ['2026-03-06','Goode Co.'],['2026-03-13','Island Grill'],['2026-03-20','Chick-Fil-A'],
  ['2026-03-27','Taco Deli'],['2026-04-03','Kolache Shop'],['2026-04-10',"Torchy's"],
  ['2026-04-17','Goode Co.'],['2026-04-24','Island Grill'],['2026-05-01','Chick-Fil-A'],
  ['2026-05-08','Taco Deli'],['2026-05-15','Kolache Shop'],['2026-05-22',"Torchy's"],
  ['2026-05-29','Goode Co.'],['2026-06-05','Island Grill'],['2026-06-12','Chick-Fil-A'],
  ['2026-06-19','Taco Deli'],['2026-06-26','Kolache Shop'],['2026-07-03',"Torchy's"],
  ['2026-07-10','Goode Co.'],['2026-07-17','Island Grill'],['2026-07-24','Chick-Fil-A'],
  ['2026-07-31','Taco Deli'],['2026-08-07','Kolache Shop'],['2026-08-14',"Torchy's"],
  ['2026-08-21','Goode Co.'],['2026-08-28','Island Grill'],['2026-09-04','Chick-Fil-A'],
  ['2026-09-11','Taco Deli'],['2026-09-18','Kolache Shop'],['2026-09-25',"Torchy's"],
  ['2026-10-02','Goode Co.'],['2026-10-09','Island Grill'],['2026-10-16','Chick-Fil-A'],
  ['2026-10-23','Taco Deli'],['2026-10-30','Kolache Shop'],['2026-11-06',"Torchy's"],
  ['2026-11-13','Goode Co.'],['2026-11-20','Island Grill'],['2026-11-27','Chick-Fil-A'],
  ['2026-12-04','Taco Deli'],['2026-12-11','Kolache Shop'],['2026-12-18',"Torchy's"],
  ['2026-12-25','Goode Co.']
];

const PLACES = ['Taco Deli','Kolache Shop',"Torchy's",'Goode Co.','Island Grill','Chick-Fil-A'];

const DEFAULT_VOTERS = {
  'JD':      {voted:true,  picks:[['Chick-Fil-A',1],['Kolache Shop',2],["Torchy's",3],['Goode Co.',4],['Island Grill',5],['Taco Deli',6]]},
  'Avery':   {voted:true,  picks:[['Chick-Fil-A',1],['Kolache Shop',2],['Goode Co.',3],["Torchy's",4],['Island Grill',5],['Taco Deli',6]]},
  'Ava':     {voted:true,  picks:[['Chick-Fil-A',1],['Island Grill',2],['Kolache Shop',3],["Torchy's",4],['Taco Deli',5],['Goode Co.',6]]},
  'Zach':    {voted:true,  picks:[['Kolache Shop',1],['Chick-Fil-A',2],["Torchy's",3],['Goode Co.',4],['Island Grill',5],['Taco Deli',6]]}
};

const DEFAULT_MENUS = {
  'Taco Deli': [
    {item:'Sirloin', rank:1},{item:'Sausage', rank:2},{item:'Bacon', rank:3},
    {item:'The Vaqueros', rank:4},{item:'The Otto', rank:5},{item:'Jess Special', rank:6},{item:'Bagels', rank:7}
  ],
  'Kolache Shop':[], 'Chick-Fil-A':[], 'Goode Co.':[], "Torchy's":[], 'Island Grill':[]
};

let voters = JSON.parse(JSON.stringify(DEFAULT_VOTERS));
let menus = JSON.parse(JSON.stringify(DEFAULT_MENUS));

const TODAY = new Date(2026, 4, 14);
let calYear = 2026, calMonth = 4;
let currentFilter = 'all';
let searchTerm = '';
let activeMenu = 'Taco Deli';
let activeVoter = null;
let editPicks = [];

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove('show'), 2200);
}

function placeRankings(){
  const tally = {};
  PLACES.forEach(p => tally[p] = {sum:0, count:0});
  Object.values(voters).forEach(v => {
    if(!v.voted) return;
    v.picks.forEach(([place, rank]) => {
      if(tally[place]) { tally[place].sum += rank; tally[place].count++; }
    });
  });
  return PLACES.map(p => ({
    place: p,
    score: tally[p].count ? tally[p].sum / tally[p].count : null,
    votes: tally[p].count
  })).sort((a,b) => {
    if(a.score === null) return 1;
    if(b.score === null) return -1;
    return a.score - b.score;
  });
}

function parseDate(s) { const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); }

function setMastheadDate(){
  const opts = {weekday:'long', month:'long', day:'numeric', year:'numeric'};
  document.getElementById('masthead-date').textContent = TODAY.toLocaleDateString('en-US', opts).toUpperCase();
}

function renderStats(){
  const next = SCHEDULE.find(([d]) => parseDate(d) >= TODAY);
  if(next){
    document.getElementById('stat-next').textContent = next[1];
    const dt = parseDate(next[0]);
    document.getElementById('stat-next-date').textContent = dt.toLocaleDateString('en-US',{month:'short',day:'numeric'}) + ' · Friday';
    document.getElementById('stat-next-logo').innerHTML = LOGOS[next[1]](40);
  }
  const ranks = placeRankings();
  const top = ranks[0];
  document.getElementById('stat-top').textContent = top.place;
  document.getElementById('stat-top-score').textContent = top.score !== null ? `avg score · ${top.score.toFixed(1)}` : 'no votes yet';
  document.getElementById('stat-top-logo').innerHTML = LOGOS[top.place](40);

  const weeks = SCHEDULE.filter(([d]) => parseDate(d) < TODAY).length;
  document.getElementById('stat-weeks').textContent = weeks;

  const voted = Object.values(voters).filter(v => v.voted).length;
  document.getElementById('stat-voters').textContent = voted;
  document.getElementById('stat-voters-sub').textContent = voted === 1 ? 'team member submitted' : 'team members submitted';
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOWS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function renderCalendar(){
  document.getElementById('cal-title').textContent = `${MONTHS[calMonth]} ${calYear}`;
  const grid = document.getElementById('cal-grid');
  grid.innerHTML = '';
  DOWS.forEach(d => {
    const h = document.createElement('div');
    h.className = 'cal-dayhead';
    h.textContent = d;
    grid.appendChild(h);
  });
  const firstDay = new Date(calYear, calMonth, 1);
  const lastDay = new Date(calYear, calMonth + 1, 0);
  const startOffset = firstDay.getDay();
  for(let i = 0; i < startOffset; i++){
    const c = document.createElement('div');
    c.className = 'cal-cell empty';
    grid.appendChild(c);
  }
  const nextScheduled = SCHEDULE.find(([d]) => parseDate(d) >= TODAY);
  const nextDateStr = nextScheduled ? nextScheduled[0] : null;
  for(let day = 1; day <= lastDay.getDate(); day++){
    const dt = new Date(calYear, calMonth, day);
    const dateStr = `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const scheduled = SCHEDULE.find(([d]) => d === dateStr);
    const isToday = dt.toDateString() === TODAY.toDateString();
    const isPast = dt < TODAY && !isToday;
    const isNext = dateStr === nextDateStr;
    const c = document.createElement('div');
    c.className = 'cal-cell';
    if(scheduled) c.classList.add('friday');
    if(isToday) c.classList.add('today');
    if(isNext) c.classList.add('next-up');
    if(scheduled && isPast) c.classList.add('past-friday');
    let html = `<div class="cal-daynum">${day}</div>`;
    if(scheduled){
      html += `<div class="cal-event"><div class="cal-event-logo">${LOGOS[scheduled[1]](22)}</div><div class="cal-event-label">${scheduled[1]}</div></div>`;
      c.addEventListener('click', () => openDayModal(scheduled[0], scheduled[1]));
    }
    c.innerHTML = html;
    grid.appendChild(c);
  }
}

function openDayModal(dateStr, place){
  const dt = parseDate(dateStr);
  document.getElementById('day-eyebrow').textContent = 'Friday Breakfast';
  document.getElementById('day-title').textContent = dt.toLocaleDateString('en-US',{weekday:'long', month:'long', day:'numeric', year:'numeric'});
  const ranks = placeRankings();
  const r = ranks.find(x => x.place === place);
  const score = r && r.score !== null ? r.score.toFixed(1) : 'No votes yet';
  const items = (menus[place] || []).sort((a,b)=>a.rank-b.rank);
  let body = `
    <div style="display:flex;align-items:center;gap:18px;margin-bottom:20px;padding-bottom:18px;border-bottom:1px solid var(--rule);">
      ${LOGOS[place](64)}
      <div>
        <div style="font-family:'Fraunces',serif;font-size:24px;font-weight:500;color:var(--main-navy);">${place}</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ink-soft);margin-top:4px;">Avg score · ${score} · ${r ? r.votes : 0} votes</div>
      </div>
    </div>`;
  if(items.length){
    body += `<div style="font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:var(--ink-soft);margin-bottom:10px;">Top Picks</div>`;
    items.slice(0,5).forEach(it => {
      body += `<div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--rule);"><div style="font-family:'Fraunces',serif;font-size:18px;font-weight:600;color:var(--main-navy);width:24px;">${it.rank}</div><div style="font-size:14px;">${it.item}</div></div>`;
    });
  } else {
    body += `<div style="text-align:center;padding:16px;color:var(--ink-soft);font-style:italic;font-size:13px;">No menu items logged yet — add some on the Menu Picks tab.</div>`;
  }
  document.getElementById('day-body').innerHTML = body;
  document.getElementById('day-modal').classList.add('open');
}

document.getElementById('day-close').addEventListener('click', () => document.getElementById('day-modal').classList.remove('open'));
document.getElementById('cal-prev').addEventListener('click', () => { calMonth--; if(calMonth < 0){ calMonth = 11; calYear--; } renderCalendar(); });
document.getElementById('cal-next').addEventListener('click', () => { calMonth++; if(calMonth > 11){ calMonth = 0; calYear++; } renderCalendar(); });
document.getElementById('cal-today').addEventListener('click', () => { calYear = TODAY.getFullYear(); calMonth = TODAY.getMonth(); renderCalendar(); });

function renderSchedule(){
  const grid = document.getElementById('schedule-grid');
  grid.innerHTML = '';
  const next = SCHEDULE.find(([d]) => parseDate(d) >= TODAY);
  const nextDate = next ? next[0] : null;
  const ranks = placeRankings();
  SCHEDULE.forEach(([dateStr, place]) => {
    const dt = parseDate(dateStr);
    const isPast = dt < TODAY;
    const isNext = dateStr === nextDate;
    if(currentFilter==='upcoming' && isPast) return;
    if(currentFilter==='past' && !isPast) return;
    if(searchTerm && !place.toLowerCase().includes(searchTerm.toLowerCase())) return;
    const rk = ranks.find(r => r.place === place);
    const score = rk && rk.score !== null ? rk.score.toFixed(1) : '—';
    const card = document.createElement('div');
    card.className = 'week-card' + (isNext ? ' next-up' : '') + (isPast ? ' past' : '');
    card.innerHTML = `
      <div class="wc-header">
        <div class="wc-date">${dt.toLocaleDateString('en-US',{month:'short',day:'numeric'}).toUpperCase()} · FRI</div>
        ${isNext ? '<div class="wc-badge">NEXT UP</div>' : (isPast ? '<div class="wc-badge past-badge">DONE</div>' : '')}
      </div>
      <div class="wc-main">
        <div class="wc-logo">${LOGOS[place](44)}</div>
        <div class="wc-place">${place}</div>
      </div>
      <div class="wc-rank"><span class="rank-dot"></span>Avg: ${score}</div>`;
    card.addEventListener('click', () => openDayModal(dateStr, place));
    grid.appendChild(card);
  });
  if(!grid.children.length) grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--ink-soft);font-style:italic;">No matches.</div>';
}

document.querySelectorAll('[data-filter]').forEach(p => {
  p.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));
    p.classList.add('active');
    currentFilter = p.dataset.filter;
    renderSchedule();
  });
});
document.getElementById('schedule-search').addEventListener('input', e => { searchTerm = e.target.value; renderSchedule(); });

function renderRankings(){
  const tbl = document.getElementById('rank-table');
  const ranks = placeRankings();
  const max = 6;
  let html = `
    <div class="rank-row head">
      <div class="rank-num">#</div>
      <div class="rank-logo-col">Logo</div>
      <div class="rank-name">Restaurant</div>
      <div>Score Bar</div>
      <div class="rank-score">Avg</div>
    </div>`;
  ranks.forEach((r,i) => {
    if(r.score === null){
      html += `<div class="rank-row" style="opacity:0.55"><div class="rank-num">—</div><div>${LOGOS[r.place](40)}</div><div class="rank-name">${r.place}</div><div class="rank-bar-wrap"></div><div class="rank-score">N/A</div></div>`;
    } else {
      const pct = ((max - r.score) / max) * 100;
      html += `<div class="rank-row"><div class="rank-num">${String(i+1).padStart(2,'0')}</div><div>${LOGOS[r.place](40)}</div><div class="rank-name">${r.place}</div><div class="rank-bar-wrap"><div class="rank-bar" style="width:${pct}%"></div></div><div class="rank-score">${r.score.toFixed(1)}</div></div>`;
    }
  });
  tbl.innerHTML = html;
}

function renderFreqChart(){
  const counts = {};
  SCHEDULE.forEach(([,p]) => counts[p] = (counts[p]||0)+1);
  const data = Object.entries(counts).sort((a,b)=>b[1]-a[1]);
  const W=600, H=300, pad={t:20,r:20,b:60,l:50};
  const cw = W-pad.l-pad.r, ch = H-pad.t-pad.b;
  const max = Math.max(...data.map(d=>d[1]));
  const bw = cw / data.length * 0.7;
  const gap = cw / data.length * 0.3;
  let svg = `<g font-family="JetBrains Mono, monospace" font-size="9">`;
  for(let i=0;i<=max;i+=2){
    const y = pad.t + ch - (i/max)*ch;
    svg += `<line x1="${pad.l}" y1="${y}" x2="${W-pad.r}" y2="${y}" stroke="rgba(3,88,4,0.08)"/><text x="${pad.l-8}" y="${y+3}" text-anchor="end" fill="#4a4a4a">${i}</text>`;
  }
  data.forEach(([place,count],i)=>{
    const x = pad.l + i*(cw/data.length) + gap/2;
    const h = (count/max)*ch;
    const y = pad.t + ch - h;
    svg += `<rect x="${x}" y="${y}" width="${bw}" height="${h}" fill="#035804" rx="2"><animate attributeName="height" from="0" to="${h}" dur="0.8s" fill="freeze"/><animate attributeName="y" from="${pad.t+ch}" to="${y}" dur="0.8s" fill="freeze"/></rect><text x="${x+bw/2}" y="${y-6}" text-anchor="middle" fill="#035804" font-weight="600" font-family="Fraunces, serif" font-size="14">${count}</text><text x="${x+bw/2}" y="${pad.t+ch+18}" text-anchor="middle" fill="#4a4a4a" font-size="10">${place.length>10?place.slice(0,9)+'…':place}</text>`;
  });
  svg += `</g>`;
  document.getElementById('freq-chart').innerHTML = svg;
}

function renderDistChart(){
  const data = placeRankings().filter(r=>r.score!==null);
  if(!data.length){ document.getElementById('dist-chart').innerHTML = `<text x="200" y="150" text-anchor="middle" fill="#4a4a4a" font-family="Inter, sans-serif" font-size="13" font-style="italic">No votes yet.</text>`; return; }
  const W=400, H=300, pad={t:30,r:30,b:30,l:120};
  const cw = W-pad.l-pad.r, ch = H-pad.t-pad.b;
  const bh = ch / data.length * 0.6;
  const gap = ch / data.length * 0.4;
  let svg = `<g font-family="Inter, sans-serif" font-size="11">`;
  data.forEach((d,i)=>{
    const y = pad.t + i*(ch/data.length) + gap/2;
    const w = (d.score/6)*cw;
    svg += `<defs><linearGradient id="gradBar${i}" x1="0" x2="1"><stop offset="0" stop-color="#035804"/><stop offset="1" stop-color="#bcd7c8"/></linearGradient></defs><text x="${pad.l-10}" y="${y+bh/2+4}" text-anchor="end" fill="#1a1a1a" font-family="Fraunces, serif" font-weight="500">${d.place}</text><rect x="${pad.l}" y="${y}" width="${cw}" height="${bh}" fill="rgba(3,88,4,0.06)" rx="2"/><rect x="${pad.l}" y="${y}" width="${w}" height="${bh}" fill="url(#gradBar${i})" rx="2"><animate attributeName="width" from="0" to="${w}" dur="1s" fill="freeze"/></rect><text x="${pad.l+w+8}" y="${y+bh/2+4}" fill="#035804" font-family="JetBrains Mono, monospace" font-weight="500">${d.score.toFixed(1)}</text>`;
  });
  svg += `</g>`;
  document.getElementById('dist-chart').innerHTML = svg;
}

function renderVoters(){
  const grid = document.getElementById('voter-grid');
  grid.innerHTML = '';
  const names = Object.keys(voters);
  if(!names.length){
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 24px;color:var(--ink-soft);font-style:italic;background:white;border:1px dashed var(--rule);border-radius:4px;">No ballots submitted yet. Click <strong style="color:var(--main-navy);font-style:normal;">+ Submit Ranking</strong> above to add the first one.</div>`;
    renderVoterDetail();
    return;
  }
  names.forEach(name => {
    const v = voters[name];
    const card = document.createElement('div');
    card.className = 'voter-card' + (activeVoter===name?' selected':'');
    const top = v.voted ? v.picks.find(p=>p[1]===1) : null;
    card.innerHTML = `<div class="voter-name">${name}</div><div class="voter-status voted">● Submitted</div><div class="voter-pick">Top pick: <strong>${top?top[0]:'—'}</strong></div>`;
    card.addEventListener('click', () => {
      activeVoter = activeVoter===name ? null : name;
      renderVoters();
    });
    grid.appendChild(card);
  });
  renderVoterDetail();
}

function renderVoterDetail(){
  const existing = document.getElementById('voter-detail');
  if(existing) existing.remove();
  if(!activeVoter) return;
  const v = voters[activeVoter];
  if(!v || !v.voted) return;
  const detail = document.createElement('div');
  detail.id = 'voter-detail';
  detail.style.cssText = 'margin-top:24px;background:white;border:1px solid var(--rule);border-top:3px solid var(--main-gold-accent);padding:24px;border-radius:4px;animation:fadeIn 0.3s ease;';
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;"><div><div style="font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:var(--ink-soft);margin-bottom:6px;">Personal Ballot</div><h3 style="font-family:'Fraunces',serif;font-weight:500;font-size:24px;color:var(--main-navy);">${activeVoter}'s Picks</h3></div><button class="btn btn-ghost" id="edit-vote-btn">Edit</button></div>`;
  const sorted = [...v.picks].sort((a,b)=>a[1]-b[1]);
  sorted.forEach(([place,rank])=>{
    html += `<div style="display:grid;grid-template-columns:40px 48px 1fr;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--rule);"><div style="font-family:'Fraunces',serif;font-size:22px;font-weight:500;color:var(--main-navy);">${rank}</div><div>${LOGOS[place](36)}</div><div style="font-family:'Fraunces',serif;font-size:16px;color:var(--ink);">${place}</div></div>`;
  });
  document.querySelector('[data-panel="voters"].panel').appendChild(detail);
  document.getElementById('edit-vote-btn').addEventListener('click', () => openVoteModal(activeVoter));
}

function openVoteModal(presetName = '') {
  const input = document.getElementById('vote-name');
  input.value = presetName;
  input.disabled = false; // allow editing always
  if(presetName && voters[presetName] && voters[presetName].voted){
    editPicks = [...voters[presetName].picks].sort((a,b)=>a[1]-b[1]).map(p=>p[0]);
  } else {
    editPicks = [...PLACES];
  }
  renderRankList();
  document.getElementById('vote-modal').classList.add('open');
  // focus on name field for fast entry
  setTimeout(() => { if(!presetName) input.focus(); }, 100);
}

function renderRankList() {
  const ul = document.getElementById('vote-ranklist');
  ul.innerHTML = '';
  editPicks.forEach((place, i) => {
    const li = document.createElement('li');
    li.className = 'rank-item';
    li.draggable = true;
    li.dataset.idx = i;
    li.innerHTML = `<span class="rank-handle">⋮⋮</span><span class="rank-position">${i+1}</span><span>${LOGOS[place](32)}</span><span class="rank-item-name">${place}</span>`;
    li.addEventListener('dragstart', e => {
      li.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', i);
    });
    li.addEventListener('dragend', () => {
      li.classList.remove('dragging');
      document.querySelectorAll('.rank-item').forEach(x => x.classList.remove('drag-over'));
    });
    li.addEventListener('dragover', e => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; li.classList.add('drag-over'); });
    li.addEventListener('dragleave', () => li.classList.remove('drag-over'));
    li.addEventListener('drop', e => {
      e.preventDefault();
      const from = parseInt(e.dataTransfer.getData('text/plain'));
      const to = parseInt(li.dataset.idx);
      if(from === to) return;
      const item = editPicks.splice(from, 1)[0];
      editPicks.splice(to, 0, item);
      renderRankList();
    });
    ul.appendChild(li);
  });
}

document.getElementById('open-vote-btn').addEventListener('click', () => openVoteModal());
document.getElementById('vote-cancel').addEventListener('click', () => document.getElementById('vote-modal').classList.remove('open'));
document.getElementById('vote-save').addEventListener('click', () => {
  const name = document.getElementById('vote-name').value.trim();
  if(!name){ showToast('Type your name first.'); return; }
  voters[name] = { voted: true, picks: editPicks.map((p,i) => [p, i+1]) };
  document.getElementById('vote-modal').classList.remove('open');
  showToast(`Ranking saved for ${name}.`);
  renderStats();
  renderVoters();
  renderRankings();
  renderDistChart();
});

function renderMenuTabs(){
  const tabs = document.getElementById('menu-tabs');
  tabs.innerHTML = '';
  PLACES.forEach(p => {
    const t = document.createElement('button');
    t.className = 'menu-tab' + (activeMenu===p?' active':'');
    t.innerHTML = `${LOGOS[p](20)}<span>${p}</span>`;
    t.addEventListener('click', () => { activeMenu = p; renderMenuTabs(); renderMenuCard(); });
    tabs.appendChild(t);
  });
}

function renderMenuCard(){
  const card = document.getElementById('menu-card');
  const items = (menus[activeMenu] || []).slice().sort((a,b)=>a.rank-b.rank);
  let html = `<div class="menu-card-head">${LOGOS[activeMenu](56)}<div class="menu-card-title-block"><h3>${activeMenu}</h3><div class="menu-sub">Top Picks · Ranked · ${items.length} item${items.length===1?'':'s'}</div></div></div>`;
  if(!items.length){
    html += `<div class="menu-empty">No menu rankings yet — add one below.</div>`;
  } else {
    html += '<ul class="menu-list">';
    items.forEach(it => {
      const stars = '★'.repeat(Math.max(1, 8 - it.rank));
      html += `<li class="menu-item"><div class="menu-rank-num">${it.rank}</div><div class="menu-name">${it.item}</div><div class="menu-stars">${stars.slice(0,7)}</div><button class="menu-del" data-item="${encodeURIComponent(it.item)}" title="Remove">✕</button></li>`;
    });
    html += '</ul>';
  }
  html += `<div class="menu-add-form"><input type="text" class="form-input" id="menu-add-name" placeholder="Item name (e.g. Honey butter biscuit)" /><input type="number" class="form-input" id="menu-add-rank" placeholder="Rank" min="1" style="max-width:90px;flex:0 0 90px;" /><button class="btn btn-primary" id="menu-add-btn">Add</button></div>`;
  card.innerHTML = html;

  card.querySelectorAll('.menu-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = decodeURIComponent(btn.dataset.item);
      menus[activeMenu] = menus[activeMenu].filter(x => x.item !== name);
      renderMenuCard();
      showToast('Removed.');
    });
  });

  document.getElementById('menu-add-btn').addEventListener('click', () => {
    const nameInput = document.getElementById('menu-add-name');
    const rankInput = document.getElementById('menu-add-rank');
    const name = nameInput.value.trim();
    const rank = parseInt(rankInput.value);
    if(!name){ showToast('Item name required.'); return; }
    const nextRank = rank || ((menus[activeMenu] || []).length + 1);
    if(!menus[activeMenu]) menus[activeMenu] = [];
    menus[activeMenu].push({item: name, rank: nextRank});
    nameInput.value = '';
    rankInput.value = '';
    renderMenuCard();
    showToast(`Added "${name}".`);
  });

  const nameInput = document.getElementById('menu-add-name');
  if(nameInput){
    nameInput.addEventListener('keydown', e => {
      if(e.key === 'Enter') document.getElementById('menu-add-btn').click();
    });
  }
}

document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('main .panel').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    document.querySelector(`.panel[data-panel="${t.dataset.panel}"]`).classList.add('active');
  });
});

document.querySelectorAll('.modal-backdrop').forEach(m => {
  m.addEventListener('click', e => { if(e.target === m) m.classList.remove('open'); });
});

setMastheadDate();
renderStats();
renderCalendar();
renderSchedule();
renderRankings();
renderFreqChart();
renderDistChart();
renderVoters();
renderMenuTabs();
renderMenuCard();
</script>
</body>
</html>
