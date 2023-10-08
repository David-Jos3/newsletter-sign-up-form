import styles from "./Infos.module.css";
import Image from "next/image";
import icon from "../../assets/images/icon-success.svg";

export default function Infos() {
  return (
    <div className={styles.areaInfos}>
      <div>
        <Image src={icon} width={20} height={20} alt="" />
        <span> Product discovery and building what matters</span>
      </div>
      <div>
        <Image src={icon} width={20} height={20} alt="" />
        <span> Measuring to ensure updates are a success</span>
      </div>
      <div>
        <Image src={icon} width={20} height={20} alt="" />
        <span> And much more</span>
      </div>
    </div>
  );
}
