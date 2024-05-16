import Image from "next/image";
import styles from "./page.module.css";

export default async function Page({ params }: { params: string }) {
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
  // const data = {
  //   id: "elon-musk",
  //   state: "Texas",
  //   city: "Austin",
  //   name: "Elon Musk",
  //   country: "United States",
  //   position: 1,
  //   industries: ["Automotive"],
  //   financialAssets: [
  //     {
  //       exchange: "NASDAQ",
  //       ticker: "TSLA-US",
  //       companyName: "Tesla",
  //       numberOfShares: 140846000,
  //       sharePrice: 699,
  //       currencyCode: "USD",
  //       exchangeRate: 1,
  //       interactive: true,
  //       currentPrice: 639.3,
  //     },
  //     {
  //       exchange: "NASDAQ",
  //       ticker: "TSLA-US",
  //       companyName: "Tesla",
  //       numberOfShares: 2639000,
  //       exerciseOptionPrice: 6.24,
  //       sharePrice: 699,
  //       currencyCode: "USD",
  //       exchangeRate: 1,
  //       interactive: false,
  //       currentPrice: 639.3,
  //     },
  //     {
  //       exchange: "NASDAQ",
  //       ticker: "TSLA-US",
  //       companyName: "Tesla",
  //       numberOfShares: 92858000,
  //       exerciseOptionPrice: 70.01,
  //       sharePrice: 699,
  //       currencyCode: "USD",
  //       exchangeRate: 1,
  //       interactive: false,
  //       currentPrice: 639.3,
  //     },
  //     {
  //       exchange: "NASDAQ",
  //       ticker: "TSLA-US",
  //       companyName: "Tesla",
  //       numberOfShares: 2000,
  //       exerciseOptionPrice: 8.366,
  //       sharePrice: 699,
  //       currencyCode: "USD",
  //       exchangeRate: 1,
  //       interactive: false,
  //       currentPrice: 639.3,
  //     },
  //     {
  //       exchange: "NASDAQ",
  //       ticker: "TSLA-US",
  //       companyName: "Tesla",
  //       numberOfShares: 2000,
  //       exerciseOptionPrice: 20.01,
  //       sharePrice: 699,
  //       currencyCode: "USD",
  //       exchangeRate: 1,
  //       interactive: false,
  //       currentPrice: 639.3,
  //     },
  //     {
  //       exchange: "NYSE",
  //       ticker: "TWTR-US",
  //       companyName: "Twitter, Inc.",
  //       numberOfShares: 73115000,
  //       sharePrice: 37.99,
  //       currencyCode: "USD",
  //       exchangeRate: 1,
  //       interactive: false,
  //       currentPrice: 37.36,
  //     },
  //   ],
  //   thumbnail:
  //     "http://specials-images.forbesimg.com/imageserve/5f47d4de7637290765bce495/280x425.jpg?fit=scale&background=000000",
  //   squareImage:
  //     "https://specials-images.forbesimg.com/imageserve/5f47d4de7637290765bce495/416x416.jpg?background=000000&cropX1=1699&cropX2=3845&cropY1=559&cropY2=2704",
  //   bio: [
  //     "Elon Musk is working to revolutionize transportation both on Earth, through electric car maker Tesla -- and in space, via rocket producer SpaceX.",
  //     "He owns about 25% of Tesla between stock and options, but has pledged more than half his stock as collateral for loans; Forbes has applied a discount to take the loans into account.",
  //     "Twitter's board agreed to sell the company to Musk for $44 billion on April 25, 2022, after he disclosed a 9.1% stake and threatened a hostile takeover.",
  //     "SpaceX, Musk's rocket company, is valued at $100 billion after a funding round in December 2021.",
  //     "He grew up in South Africa, then immigrated to Canada at age 17. He landed in the U.S. as a transfer student to the University of Pennsylvania.",
  //   ],
  //   about: [
  //     "Musk was accepted to a graduate program at Stanford, but deferred attendance to launch his first business, software company Zip2.",
  //     "As a kid Musk taught himself to code; he sold his first game, Blastar, for about $500. ",
  //   ],
  //   netWorth: 201430.751,
  // };
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
