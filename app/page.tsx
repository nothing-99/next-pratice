import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  // const billionaries: {
  //   id: string;
  //   name: string;
  //   squareImage: string;
  //   netWorth: number;
  //   industries: string[];
  // }[] = await fetch("https://billions-api.nomadcoders.workers.dev/").then(
  //   (res) => res.json()
  // );
  const billionaries = [
    {
      id: "elon-musk",
      name: "Elon Musk",
      squareImage:
        "https://specials-images.forbesimg.com/imageserve/5f47d4de7637290765bce495/416x416.jpg?background=000000&cropX1=1699&cropX2=3845&cropY1=559&cropY2=2704",
      netWorth: 201430.751,
      industries: ["Automotive"],
    },
    {
      id: "bernard-arnault",
      name: "Bernard Arnault & family",
      squareImage:
        "https://specials-images.forbesimg.com/imageserve/5dc05518ca425400079c659f/416x416.jpg?background=000000&cropX1=0&cropX2=4000&cropY1=1209&cropY2=5212",
      netWorth: 138965.305,
      industries: ["Fashion & Retail"],
    },
    {
      id: "jeff-bezos",
      name: "Jeff Bezos",
      squareImage:
        "https://specials-images.forbesimg.com/imageserve/5bb22ae84bbe6f67d2e82e05/416x416.jpg?background=000000&cropX1=627&cropX2=1639&cropY1=129&cropY2=1142",
      netWorth: 129386.13,
      industries: ["Technology"],
    },
    {
      id: "bill-gates",
      name: "Bill Gates",
      squareImage:
        "https://specials-images.forbesimg.com/imageserve/5f4ebe0c87612dab4f12a597/416x416.jpg?background=000000&cropX1=292&cropX2=3684&cropY1=592&cropY2=3987",
      netWorth: 120539.175,
      industries: ["Technology"],
    },
    {
      id: "warren-buffett",
      name: "Warren Buffett",
      squareImage:
        "https://specials-images.forbesimg.com/imageserve/5babb7f1a7ea4342a948b79a/416x416.jpg?background=000000&cropX1=748&cropX2=3075&cropY1=1753&cropY2=4082",
      netWorth: 97440.504,
      industries: ["Finance & Investments"],
    },
    {
      id: "mukesh-ambani",
      name: "Mukesh Ambani",
      squareImage:
        "https://specials-images.forbesimg.com/imageserve/5c7d7829a7ea434b351ba0b6/416x416.jpg?background=000000&cropX1=206&cropX2=2043&cropY1=250&cropY2=2089",
      netWorth: 96617.728,
      industries: ["Diversified"],
    },
    {
      id: "gautam-adani-1",
      name: "Gautam Adani & family",
      squareImage:
        "https://specials-images.forbesimg.com/imageserve/59cd4d61a7ea434a34f47b11/416x416.jpg?background=000000&cropX1=891&cropX2=4131&cropY1=69&cropY2=3309",
      netWorth: 94547.622,
      industries: ["Diversified"],
    },
    {
      id: "larry-ellison",
      name: "Larry Ellison",
      squareImage:
        "https://specials-images.forbesimg.com/imageserve/5e8b62cfc095010007bffea0/416x416.jpg?background=000000&cropX1=0&cropX2=4529&cropY1=652&cropY2=5184",
      netWorth: 93911.552,
      industries: ["Technology"],
    },
    {
      id: "larry-page",
      name: "Larry Page",
      squareImage:
        "https://specials-images.forbesimg.com/imageserve/5c76bcaaa7ea43100043c836/416x416.jpg?background=000000&cropX1=227&cropX2=2022&cropY1=22&cropY2=1817",
      netWorth: 92041.979,
      industries: ["Technology"],
    },
  ];
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
