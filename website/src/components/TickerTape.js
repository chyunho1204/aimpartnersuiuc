// src/components/TickerTape.js
import React, { useEffect, useRef } from 'react';

export default function TickerTape() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // 1) TradingView 스펙에 맞춘 wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'tradingview-widget-container';

    // (선택) widget placeholder div — 일부 위젯은 필요합니다.
    const placeholder = document.createElement('div');
    placeholder.className = 'tradingview-widget-container__widget';
    wrapper.appendChild(placeholder);

    // 2) config JSON을 담은 <script> 생성
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';

    // 반드시 textContent 또는 .text 로 설정해야 innerHTML보다 실행 보장
    script.text = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
        { proName: 'INDEX:NDX',       title: 'NASDAQ 100' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'NASDAQ:AAPL',     description: 'Apple' },
        { proName: 'NASDAQ:MSFT',     description: 'Microsoft' },
        { proName: 'NASDAQ:NVDA',     description: 'Nvidia' },
        { proName: 'NASDAQ:TSLA',     description: 'Tesla' }
      ],
      showSymbolLogo: true,
      colorTheme: 'light',
      isTransparent: false,
      displayMode: 'adaptive',
      locale: 'en'
    });

    wrapper.appendChild(script);
    container.appendChild(wrapper);

    // 언마운트 시 wrapper 자체를 제거
    return () => {
      container.removeChild(wrapper);
    };
  }, []);

  return <div ref={ref} className="static-quotes" />;
}
