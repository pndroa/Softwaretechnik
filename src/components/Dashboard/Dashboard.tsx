import styles from "./Dashboard.module.css"
import Image from "next/image"
import stcIcon from "@/pictures/stcIcon.png"
import newsIcon from "@/pictures/newsIcon.png"
import Link from "next/link"

const Dashboard = () => {
  return (
    <div className={styles.container}>
      {/* NEWSLETTER */}
      <div>
        <Image
          src={stcIcon}
          alt="companyLogo"
          className={styles.stcLogo}
        ></Image>
        <h1 className={styles.News}>NEWS</h1>
      </div>
      <div>
        <main className={styles.textArea1}>
          <strong style={{ textDecorationLine: "underline" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </strong>{" "}
          <br />
          Incidunt fugiat veniam nisi in unde quod illo modi, deserunt
          molestias? <br />
          <span style={{ color: "red" }}>
            Corporis odio quidem quisquam nostrum
          </span>
          , soluta adipisci aperiam earum voluptatem est. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil
          soluta delectus quisquam <br />
          aut tempora ipsa dolores quibusdam,{" "}
          <span style={{ border: "2px dotted black" }}>
            quaerat corporis
          </span>{" "}
          hic distinctio reiciendis labore <br />
          nesciunt sed debitis ducimus similique ut!
        </main>
        <Image
          src={newsIcon}
          alt="newsIcon"
          className={styles.newsIcon1}
        ></Image>
      </div>
      <div>
        <main className={styles.textArea2}>
          <strong style={{ textDecorationLine: "underline" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </strong>{" "}
          <br />
          Incidunt fugiat veniam nisi in unde quod illo modi, deserunt
          molestias? <br />
          <span style={{ color: "red" }}>
            Corporis odio quidem quisquam nostrum
          </span>
          , soluta adipisci aperiam earum voluptatem est. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil
          soluta delectus quisquam <br />
          aut tempora ipsa dolores quibusdam,{" "}
          <span style={{ border: "2px dotted black" }}>
            quaerat corporis
          </span>{" "}
          hic distinctio reiciendis labore <br />
          nesciunt sed debitis ducimus similique ut!
        </main>
        <Image
          src={newsIcon}
          alt="newsIcon"
          className={styles.newsIcon2}
        ></Image>
      </div>

      {/* FEATURES */}
      <div className={styles.featuresTop}>
        <div className={styles.featuresTopItems}>
          <Link
            href="/dashboard/files"
            style={{ color: "black", textDecoration: "none" }}
          >
            <strong style={{ fontSize: "22px" }}>Employee Files</strong>
          </Link>
        </div>
        <div className={styles.featuresTopItems}>
          <Link
            href="/dashboard/timetable"
            style={{ color: "black", textDecoration: "none" }}
          >
            <strong style={{ fontSize: "22px" }}>Timetable</strong>
          </Link>
        </div>
      </div>

      <div className={styles.featuresBottom}>
        <div className={styles.featuresBottomItems}>
          <Link
            href="/dashboard/settings"
            style={{ color: "black", textDecoration: "none" }}
          >
            <strong style={{ fontSize: "22px" }}>Settings</strong>
          </Link>
        </div>
        <div className={styles.featuresBottomItems}>
          <Link
            href="/dashboard/messages"
            style={{ color: "black", textDecoration: "none" }}
          >
            <strong style={{ fontSize: "22px" }}>Messages</strong>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
