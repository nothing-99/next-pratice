import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const billionaries: {
    id: string;
    name: string;
    squareImage: string;
    netWorth: number;
    industries: string[];
  }[] = await fetch("https://billions-api.nomadcoders.workers.dev/").then(
    (res) => res.json()
  );
  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {billionaries.map((data) => (
          <Link
            href={`/person/${data.id}`}
            key={data.id}
            className={styles.item}>
            <Image
              alt={data.name}
              src={data.squareImage}
              width={200}
              height={200}
              style={{ borderRadius: "20px", marginBottom: "5px" }}
            />
            <div>
              <h2 className={styles.name}>{data.name}</h2>
              <div className={styles.info}>
                <span className={styles.name}>
                  {Number(data.netWorth / 100).toFixed()} bilions $
                </span>
                <span>{data.industries.join(" ")}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
