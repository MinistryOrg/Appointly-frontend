import StarIcon from "../../styles/images/staricon.svg";

function Partner() {
  return (
    <div>
      <div className="bg-primary rounded-md w-auto text-center justify-center px-5 py-1 flex flex-row">
        <img src={StarIcon} width={20} alt="" />
        <p className="text-white font-bold text-sm text-center">
          &nbsp;PARTNER
        </p>
      </div>
    </div>
  );
}

function PartnerStar() {
  return (
    <div className="bg-primary rounded-full text-center justify-center">
      <img src={StarIcon} width={20} alt="" className="m-2" />
    </div>
  );
}

export { Partner, PartnerStar };
