import React, {useEffect, useRef} from "react";

function BottomAd() {
    // 최초 1회만 광고를 불러오기 위한 변수
    const adRef = useRef(false);

    useEffect(() => {
        // 로딩된 광고가 있으면, 추가 로딩 X
        if (adRef.current) {
            return;
        }
        const ins = document.createElement('ins');
        const script = document.createElement('script');

        ins.className = 'kakao_ad_area';
        ins.style.display = 'none;';

        ins.setAttribute('data-ad-width', '728');
        ins.setAttribute('data-ad-height', '90');
        ins.setAttribute('data-ad-unit', 'DAN-ZoMl4AzG3cCPu04h');

        script.async = true;
        script.type = 'text/javascript';
        script.src = '//t1.daumcdn.net/kas/static/ba.min.js';

        document.querySelector('.kakaoAdFit')?.appendChild(ins);
        document.querySelector('.kakaoAdFit')?.appendChild(script);
        
        // 광고 로딩 여부 상태 변경
        adRef.current = true;
    }, []);

    return (
        <>
            <div class="relative">
                <div className="kakaoAdFit"></div>
            </div>
        </>
    );
}
  
export default BottomAd;