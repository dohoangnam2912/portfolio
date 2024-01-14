import { StaticImageData } from "next/image";
import portfolio2 from "../../public/portfolios/portfolio2.png"
import portfolio3 from "../../public/portfolios/portfolio3.png"
import portfolio4 from "../../public/portfolios/portfolio4.png"
import portfolio5 from "../../public/portfolios/portfolio5.png"
import portfolio6 from "../../public/portfolios/portfolio6.png"
import portfolio7 from "../../public/portfolios/portfolio7.png"
import portfolio8 from "../../public/portfolios/portfolio8.png"
import snippet1 from "../../public/portfolios/snippet1.png"
import snippet2 from "../../public/portfolios/snippet2.png"
import snippet3 from "../../public/portfolios/snippet3.png"
import snippet4 from "../../public/portfolios/snippet4.png"
import band1 from "../../public/portfolios/band1.png"
import band2 from "../../public/portfolios/band2.png"
import band3 from "../../public/portfolios/band3.png"
import band4 from "../../public/portfolios/band4.png"
import gon1 from "../../public/portfolios/gon1.png"
import gon2 from "../../public/portfolios/gon2.png"
import gon3 from "../../public/portfolios/gon3.png"
import gon4 from "../../public/portfolios/gon4.png"
import money1 from "../../public/portfolios/money1.png"
import money2 from "../../public/portfolios/money2.png"
import money3 from "../../public/portfolios/money3.png"
import money4 from "../../public/portfolios/money4.png"







export interface Portfolio {
    id?: number;
    name: string;
    categories: string[];
    image: StaticImageData;
    url?: string;
    features?: string[];
    problem?: string;
    solution?: string;
    links?: {
        website?: string;
        github?: string;
    };
    onClick?: () => void;

    content?: {
        title?: string;
        description?: string;
        description2?: string;
        description3?: string;
        description4?: string;
        description5?: string;
        image1?: StaticImageData;
        image2?: StaticImageData;
        image3?: StaticImageData;
        image4?: StaticImageData;
        image5?: StaticImageData;

    }
}

export const portfolios: Portfolio[] = [
    {
        id: 1,
        name: "ンドのウェブ",
        categories: ["HTML/CSS", "ウェブ"],
        image: band1,
        url: "the-band",
        features: [
          "HTMLとCSSを活かして、バンドのウェブサイトを作りました。",
          "ウェブの中で、四つのセクションを表します。",
          "１。バンドのイメージを表す。",
          "２．バンドのメンバーを紹介。",
          "３．連絡の方法。",
          "４．Footerとメディアを表す。",
        ],
        problem:
          "Reactjsなどフレームワークを使わずに、HTMLとCSSのプログラムだけを活かして、ウェブサイトのフロントエンドを作りました。ウェブサイトは1ページがあります。バンドのウェブのため作られました。",
        solution:
          "これは最初のプロジェクトなんですから、簡単なウェブをできました。2週間HTMLとCSSを自習して、HTMLとCSSの基礎を固めるため、プロジェクトをしました。このプロジェクトが2週間ぐらいかかりました。簡単でも、している時に、とても楽しかったです！",
        links: {
          github: "https://github.com/dohoangnam2912/how_website.git",
        },
        content: {
          title: "ンドのウェブ",
          description:
            "HTMLとCSSを活かして、バンドのウェブサイトを作りました。",
          image1: band1,
          image2: band2,
          image3: band3,
          image4: band4,
        },
      },
    
      {
        id: 2,
        name: "イーコマースのウェブ",
        categories: ["HTML/CSS", "ウェブ"],
        image: gon1,
        url: "e-commerce-website",
        features: [
          "HTMLとCSSを活かして、イーコマースのウェブサイトを作りました。",
          "ウェブの中で、四つのセクションを表します。",
          "１。ナビゲーターのセクション。その中で、ロギングのセクションと検索バーなどがあります。",
          "２。サイドバーのセクション。",
          "3．商品を表す。",
          "４．イーコマースの連絡の方法。",
        ],
        problem:
          "Reactjsなどフレームワークを使わずに、HTMLとCSSのプログラムだけを活かして、ウェブサイトのフロントエンドを作りました。ウェブサイトは1ページがあります。イーコマースのウェブのため作られました。",
        solution:
          "これは二つ目のHTMLとCSSのプロジェクトです。ベトナムで人気がるイーコマースの通り、このウェブを作りました。このプロジェクトをした後、HTMLとCSSの基礎を固めたり、ウェブのレイアウトとUI/UXを習っていました。このプロジェクトは3週間ぐらいかかりました。",
        links: {
          github: "https://github.com/Maclinz/Snippet-Master-Reboot",
        },
        content: {
          title: "Snippet Master",
          description:
            "HTMLとCSSを活かして、イーコマースのウェブサイトを作りました。",
          image1: snippet2,
          image2: snippet3,
          image3: snippet4,
          image4: snippet1,
          image5: snippet2,
        },
      },
      {
        id: 3,
        name: "経費追跡ツールのウェブサイト",
        categories: ["Reactjs", "Nodejs", "MongoDB", "ExpressJS"],
        image: money1,
        url: "expense-tracker",
        features: [
          "ウェブの中で、四つのセクションがあります。",
          "１．収入と支出のチャートを表す。",
          "２．取引を表す。",
          "３．データベースに収入を追加",
          "４．支出に収入を追加",
        ],
        problem:
          "このウェブは経費追跡のために作りました。Reactjsのフレームワークを使って、ウェブサイトのフロントエンドを作りました。データベースは、MongoDBとNodejsを活かしてできました。",
        solution:
          "このプロジェクトを完成するため、Javascriptのプログラム、ReactjsとNodejsのフレームワークとMongoDBの知識をならいました。このプロジェクト完成した後、バックエンドとフロントエンドの稼働を分かりました。このプロジェクトは2ヶ月かかりましたが、ウェブの知識をたくさん集まって、とてもいい体験でした。",
        links: {
          github: "https://github.com/Maclinz/Snippet-Master-Reboot",
        },
        content: {
          title: "経費追跡ツールのウェブサイト",
          description:
            "このウェブは経費追跡のために作りました。",
          image1: money1,
          image2: money2,
          image3: money3,
          image4: money4,
        },
      },
      {
        id: 3,
        name: "経費追跡ツールのウェブサイト",
        categories: ["Reactjs", "Nodejs", "MongoDB", "ExpressJS"],
        image: money1,
        url: "expense-tracker",
        features: [
          "ウェブの中で、四つのセクションがあります。",
          "１．収入と支出のチャートを表す。",
          "２．取引を表す。",
          "３．データベースに収入を追加",
          "４．支出に収入を追加",
        ],
        problem:
          "このウェブは経費追跡のために作りました。Reactjsのフレームワークを使って、ウェブサイトのフロントエンドを作りました。データベースは、MongoDBとNodejsを活かしてできました。",
        solution:
          "このプロジェクトを完成するため、Javascriptのプログラム、ReactjsとNodejsのフレームワークとMongoDBの知識をならいました。このプロジェクト完成した後、バックエンドとフロントエンドの稼働を分かりました。このプロジェクトは2ヶ月かかりましたが、ウェブの知識をたくさん集まって、とてもいい体験でした。",
        links: {
          github: "https://github.com/Maclinz/Snippet-Master-Reboot",
        },
        content: {
          title: "経費追跡ツールのウェブサイト",
          description:
            "このウェブは経費追跡のために作りました。",
          image1: money1,
          image2: money2,
          image3: money3,
          image4: money4,
        },
      },
      {
        id: 3,
        name: "経費追跡ツールのウェブサイト",
        categories: ["Reactjs", "Nodejs", "MongoDB", "ExpressJS"],
        image: money1,
        url: "expense-tracker",
        features: [
          "ウェブの中で、四つのセクションがあります。",
          "１．収入と支出のチャートを表す。",
          "２．取引を表す。",
          "３．データベースに収入を追加",
          "４．支出に収入を追加",
        ],
        problem:
          "このウェブは経費追跡のために作りました。Reactjsのフレームワークを使って、ウェブサイトのフロントエンドを作りました。データベースは、MongoDBとNodejsを活かしてできました。",
        solution:
          "このプロジェクトを完成するため、Javascriptのプログラム、ReactjsとNodejsのフレームワークとMongoDBの知識をならいました。このプロジェクト完成した後、バックエンドとフロントエンドの稼働を分かりました。このプロジェクトは2ヶ月かかりましたが、ウェブの知識をたくさん集まって、とてもいい体験でした。",
        links: {
          github: "https://github.com/Maclinz/Snippet-Master-Reboot",
        },
        content: {
          title: "経費追跡ツールのウェブサイト",
          description:
            "このウェブは経費追跡のために作りました。",
          image1: money1,
          image2: money2,
          image3: money3,
          image4: money4,
        },
      },
];