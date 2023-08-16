import React, { useRef } from "react";
import { jsPDF } from "jspdf";

const PDFGenerator = ({ htmlContent }) => {
  const pdfRef = useRef();

  const generatePDF = () => {
    const element = pdfRef.current;

    const doc = new jsPDF(
      "p",

      "mm",

      "a4",

      true
    );

    doc.addFont(
      "https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf",

      "Pretendard",

      "normal"
    );

    doc.setFont("Pretendard");

    doc.html(element, {
      callback: function (doc) {
        doc.save("generated.pdf");
      },

      margin: [10, 10, 10, 10],

      autoPaging: "text",

      x: 0,

      y: 0,

      width: 190,

      windowWidth: 675,
    });
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <div ref={pdfRef}>
          <div
            dangerouslySetInnerHTML={{
              __html: `<div class="margin-top"></div>

              <h1>makeshop 스크립트 가이드</h1>
              <div style="margin-top: 2em;"></div>
            
              <h2>공통 footer</h2>
              <p>하단 &gt; 기본하단 (쇼핑몰 마다 해당 위치는 다를수 있습니다. 다른 경우, 공통 footer 파일을 찾아야 합니다.)</p>
              <ol>
                  <li>해당 위치에 삽입 시, &lt;!--/include_footer(1)/--&gt; 에서 불러오기 때문에 <strong>페이지별 스크립트는 &lt;!--/include_footer(1)/--&gt; 이전에 삽입 해야 합니다.</strong></li>
                  <li>&lt;!--/include_footer(1)/--&gt; 가 &lt;!--/include_footer(2)/--&gt; &lt;!--/include_footer(3)/--&gt; &lt;!--/include_footer(4)/--&gt; … 등 여러 개 있을 경우 상세 페이지에서 공통하단에서 불러오는 include_footer(?) 번호를 확인하여 삽입.</li>
              </ol>
              <p>(아래의 이미지 처럼 하단에서 여러 가지 하단 이름에 마우스를 올리면 footer 번호를 확인 가능합니다.)</p>
              <img src="/img/script_guide/makeshop/footer1.png" alt="footer1">
            
              <h2>스크립트</h2>
              <pre><code style="font-family: 'Pretendard';">&lt;!-- piclick common. 지우시면 안됩니다! --&gt;
              &lt;script&gt;
              if (typeof psrmedia_params === "undefined") {
              var psrmedia_params = new Object();
              psrmedia_params.type = "self";
              psrmedia_params.siteID = "siteId}";
              }
              &lt;/script&gt;
              &lt;script type="text/javascript" src="https://api.piclick.kr/common/js/v1/psr_rcv.js" async="async"&gt;&lt;/script&gt;</code></pre>
            
              <h2>상품 상세 페이지</h2>
              <h3>스크립트</h3>
              <pre><code style="font-family: 'Pretendard';">&lt;!-- start. piclick Conversion View. 지우시면 안됩니다! --&gt;
              &lt;script&gt;
              var psrmedia_params = new Object();
              psrmedia_params.type = "self";
              psrmedia_params.pageID = "view";
              psrmedia_params.siteID = "siteId}";
              psrmedia_params.user_name = "&lt;!--/user_name/--&gt;";
              psrmedia_params.item = new Array();
              var psrItem = new Object();
              psrItem.product_id = "&lt;!--/number/--&gt;";
              psrItem.product_price = '&lt;!--/price_sell/--&gt;'.replace(/[^0-9.]/g,'');
              psrItem.product_name = '&lt;!--/name/--&gt;'.replace(/(&lt;([^>]+)&gt;)/ig,"");
              psrmedia_params.item.push(psrItem);
            
              &lt;/script&gt;
              &lt;!-- end. piclick Conversion --&gt;</code></pre>
            
              <h2>장바구니 페이지</h2>
              <h3>스크립트</h3>
              <pre><code style="font-family: 'Pretendard';">&lt;!-- start. piclick Conversion basket. 지우시면 안됩니다! --&gt;
              &lt;script&gt;
              var psrmedia_params = new Object();
              psrmedia_params.type = "self";
              psrmedia_params.pageID = "basket";
              psrmedia_params.siteID = "siteId}";
              psrmedia_params.user_name = "&lt;!--/user_name/--&gt;";
            
              psrmedia_params.item = new Array();
            
              &lt;!--/loop_basket/--&gt;
            
              var psrItem = new Object();
              psrItem.id = "&lt;!--/basket@link/--&gt;";
              psrItem.price = "&lt;!--/basket@price_sell/--&gt;".replace(/[^0-9.]/g,'');
              psrItem.name = "&lt;!--/notag/basket@name/--&gt;".replace(/(&lt;([^>]+)&gt;)/ig,"");
            
              psrmedia_params.item.push(psrItem);
            
              &lt;!--/end_loop/--&gt;
              &lt;/script&gt;
              &lt;!-- end. piclick Conversion --&gt;</code></pre>
            
              <h2>통합 장바구니2 페이지</h2>
              <h3>스크립트</h3>
              <pre><code style="font-family: 'Pretendard';">&lt;!-- start. piclick Conversion basket. 지우시면 안됩니다! --&gt;
              &lt;script&gt;
              var psrmedia_params = new Object();
              psrmedia_params.type = "self";
              psrmedia_params.pageID = "basket";
              psrmedia_params.siteID = "siteId}";
              psrmedia_params.user_name = "&lt;!--/user_name/--&gt;";
            
              psrmedia_params.item = new Array();
              &lt;!--/loop_provider/--&gt;
              &lt;!--/loop_provider@basket/--&gt;
            
              var psrItem = new Object();
              psrItem.id = "&lt;!--/provider@basket@link/--&gt;";
              psrItem.price = "&lt;!--/provider@basket@price_sell/--&gt;".replace(/[^0-9.]/g,'');
              psrItem.name = "&lt;!--/notag/provider@basket@name/--&gt;".replace(/(&lt;([^>]+)&gt;)/ig,"");
            
              psrmedia_params.item.push(psrItem);
            
              &lt;!--/end_loop/--&gt;
              &lt;!--/end_loop/--&gt;
              &lt;/script&gt;
              &lt;!-- end. piclick Conversion --&gt;</code></pre>
            
              <h2>주문 완료 페이지</h2>
              <h3>스크립트</h3>
              <pre><code style="font-family: 'Pretendard';">&lt;!-- start. piclick Conversion order. 지우시면 안됩니다! --&gt;
              &lt;script&gt;
              var psrmedia_params = new Object();
              psrmedia_params.order_no = "&lt;!--/order_num/--&gt;";
              psrmedia_params.total_price = "&lt;!--/total_sum_price/--&gt;".replace(/[^0-9.]/g,'');
              psrmedia_params.pay_price = "&lt;!--/pay_price/--&gt;".replace(/[^0-9.]/g,'');
              psrmedia_params.type = "self";
              psrmedia_params.pageID = "order";
              psrmedia_params.siteID = "siteId}";
              psrmedia_params.user_name = "&lt;!--/user_name/--&gt;";
            
              psrmedia_params.item = new Array();
            
              &lt;!--/loop_order_product/--&gt;
            
              var psrItem = new Object();
              psrItem.product_id = "&lt;!--/order_product@product_id/--&gt;";
              psrItem.product_price = "&lt;!--/order_product@price/--&gt;".replace(/[^0-9.]/g,'');
              psrItem.qty = "&lt;!--/order_product@amount/--&gt;";
              psrItem.cate1 = "&lt;!--/order_product@cate1_name/--&gt;";
              psrItem.cate2 = "&lt;!--/order_product@cate2_name/--&gt;";
              psrItem.cate3 = "&lt;!--/order_product@cate3_name/--&gt;";
            
              psrmedia_params.item.push(psrItem);
            
              &lt;!--/end_loop/--&gt;
              &lt;/script&gt;
              &lt;!-- end. piclick Conversion --&gt;</code></pre>
              `,
            }}
            style={{ fontFamily: "Pretendard" }}
          />
        </div>
      </div>
      <button onClick={generatePDF}>PDF 생성</button>
    </>
  );
};

export default PDFGenerator;
