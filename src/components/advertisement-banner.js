import KakaoAdFit from "./kakao-ad-fit";

const AdvertisementBanner = () => {
  return (
    <>
      <div className="h-70 flex justify-center">
        <iframe
          src="https://ads-partners.coupang.com/widgets.html?id=699559&template=carousel&trackingCode=AF8838907&subId=&width=500&height=250&tsource="
          width="500"
          height="250"
          frameborder="0"
          scrolling="no"
          referrerpolicy="unsafe-url"
        ></iframe>
      </div>
    </>
  );
};

export default AdvertisementBanner;
