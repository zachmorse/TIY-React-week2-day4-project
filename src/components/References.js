import React from "react";

const References = () => {
  function scrollWin() {
    window.scrollTo(0, 0);
  }

  scrollWin();
  return (
    <div
      style={{
        textAlign: "left",
        color: "white",
        paddingRight: "3rem"
      }}
    >
      <h1 style={{ color: "#f0db4f" }}>References:</h1>

      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        <li>
          <h1>David Bowie</h1>{" "}
        </li>
        <li>
          <h3>daviebowie@gmail.com</h3>
        </li>
        <li>
          <p>
            -- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            dolorum eaque sed doloremque, accusamus possimus ipsam in aliquam
            tempora fuga nesciunt repellendus quo. Totam magnam obcaecati
            aliquid ratione amet beatae? Nam, nostrum sint. Unde molestias,
            illum nisi nam error, aspernatur facere mollitia quia incidunt
            beatae. Voluptas, aliquam soluta facilis. At, est, suscipit.
          </p>
        </li>
      </ul>

      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        <li>
          <h1>Barack Obama</h1>{" "}
        </li>
        <li>
          <h3>bobama@geocities.net</h3>
        </li>
        <li>
          <p>
            -- Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Deleniti eaque consequatur voluptatem quas illum nesciunt voluptate
            expedita. Repudiandae eum ex dolor ducimus, excepturi id tenetur
            repellat, harum cupiditate est temporibus!Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Fugit assumenda in repudiandae
            mollitia, ipsam dolorem, voluptatem fuga unde aliquid debitis sed
            natus. Pariatur quos provident, fugit nobis. Consectetur, itaque,
            quod!{" "}
          </p>
        </li>
      </ul>

      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        <li>
          <h1>Bill Hader</h1>{" "}
        </li>
        <li>
          <h3>haderade@aol.com</h3>
        </li>
        <li>
          <p>
            -- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            distinctio optio quaerat adipisci, ea fuga ab veritatis quisquam!
            Rem aliquid aperiam maxime fugiat earum nemo dignissimos veritatis
            dolorem! Minus, quisquam. Veniam eveniet accusantium hic debitis
            dolorem praesentium voluptates deserunt ratione unde quis, sunt
            consectetur! Adipisci, corporis at numquam, est aliquam culpa vel.{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default References;
