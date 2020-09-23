import { NotionRenderer } from "react-notion";

export async function getStaticProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/page/c1725070a1414cb1b84fef20fdf7d6ac"
  ).then(res => res.json());

  return {
    props: {
      blockMap: data
    }
  };
}

const WhatsNew = ({ blockMap }) => (
  <div>
    <NotionRenderer blockMap={blockMap} />
    <style jsx global>{`
        div :global(.notion-code) {
          box-sizing: border-box;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20;
          margin: 0;
        }
      `}</style>
  </div>
);

export default WhatsNew;