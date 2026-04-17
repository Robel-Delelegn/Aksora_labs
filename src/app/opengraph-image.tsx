import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#f5f1ea",
          color: "#171411",
          padding: "56px",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid #c9beb0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #c9beb0",
            paddingBottom: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                height: "64px",
                width: "64px",
                background: "#8b2332",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                letterSpacing: "0.18em",
                fontWeight: 700,
              }}
            >
              AL
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 44,
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                Aksora Labs
              </span>
              <span
                style={{
                  marginTop: 4,
                  fontSize: 16,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#5a524b",
                }}
              >
                Software design and engineering
              </span>
            </div>
          </div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8b2332",
              fontWeight: 700,
            }}
          >
            Aksora Labs
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "950px",
          }}
        >
          <div
            style={{
              fontSize: 76,
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            Website and application development for organizations that need to look stronger online.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.45,
              color: "#413b36",
              maxWidth: "900px",
            }}
          >
            Aksora Labs plans, designs, and engineers websites, applications,
            mobile products, and internal systems for teams that care about
            clarity, trust, and long-term quality.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "22px",
            borderTop: "1px solid #c9beb0",
            paddingTop: "20px",
            color: "#5a524b",
            fontSize: 18,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span>Websites</span>
          <span>Web apps</span>
          <span>Mobile products</span>
          <span>Internal systems</span>
        </div>
      </div>
    ),
    size,
  );
}
