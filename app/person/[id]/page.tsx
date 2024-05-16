import Image from "next/image";
import styles from "./page.module.css";

export default async function Page({ params }: { params: { id: string } }) {
  const data: {
    id: string;
    state: string;
    city: string;
    name: string;
    country: string;
    position: number;
    industries: string[];
    thumbnail: string;
    squareImage: string;
    bio: string[];
    about: string[];
    netWorth: number;
    financialAssets: {
      exchange: string;
      ticker: string;
      companyName: string;
      numberOfShares: number;
      sharePrice: number;
      currencyCode: string;
      exchangeRate: number;
      interactive: boolean;
      currentPrice: number;
    }[];
  } = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${params.id}`
  ).then((res) => res.json());

  return (
    <main className={styles.container}>
      <div>
        <Image
          src={data.squareImage}
          alt={data.name}
          width={200}
          height={200}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <h1 className={styles.name}>{data.name}</h1>
        <div className={styles.privacyInfo}>
          <span>Country: {data.country}</span>
          <span>Industries: {data.industries?.join(", ")}</span>
        </div>
        <p>{data.bio}</p>
        <div className={styles.assetList}>
          {data.financialAssets?.map((asset, index) => (
            <div
              key={index}
              className={styles.assetItme}>
              <h3>Ticker: {asset.ticker}</h3>
              <span>Company: {asset.companyName}</span>
              <span>Shares: {asset.numberOfShares}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
