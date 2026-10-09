import { ProductTypes } from "@/types/productTypes";
import { toBengaliNumber } from "@/utils/convertNumbers";

const unitLabels: Record<string, string> = {
  kg: "কেজি",
  gram: "গ্রাম",
  litre: "লিটার",
  piece: "পিস",
};

const ProductPriceDetailsCard = ({ product }: { product: ProductTypes }) => {
  const markets = product.markets;

  const sortedMarkets = [...markets].sort(
    (a, b) => a.min - b.min || a.max - b.max,
  );

  if (markets.length === 0) {
    return (
      <section className="rounded-2xl border border-gray-200 bg-[#f9fcf9] p-5">
        <p className="text-gray-500">
          এই পণ্যের বাজারভিত্তিক দামের তথ্য পাওয়া যায়নি।
        </p>
      </section>
    );
  }

  const lowest = markets.reduce((best, current) =>
    current.min < best.min ? current : best,
  );

  const highest = markets.reduce((best, current) =>
    current.max > best.max ? current : best,
  );

  const marketAverages = markets.map((market) => (market.min + market.max) / 2);

  const average = marketAverages.reduce((sum, price) => sum + price, 0) / marketAverages.length;

  const unit = unitLabels[product.unit.toLowerCase()];

  return (
    <section className="rounded-2xl border border-gray-200 bg-[#f9fcf9] p-4 sm:p-5">
      <h2 className="mb-3 text-2xl font-bold">দামের সারসংক্ষেপ</h2>

      <div className="flex flex-col gap-3 sm:flex-row">
        {/* Lowest price */}
        <div className="flex-1 rounded-2xl border border-gray-200] p-4">
          <p className="text-md text-gray-500">সর্বনিম্ন দাম</p>

          <p className="mt-1 text-xl font-bold text-green-600">
            <span className="text-3xl">{toBengaliNumber(lowest.min)}</span> টাকা
          </p>

          <p className="mt-1 text-md text-gray-500">সবচেয়ে কম দামের বাজার</p>
        </div>

        <div className="flex-1 rounded-2xl border border-gray-200 p-4">
          <p className="text-md text-gray-500">সর্বাধিক দাম</p>

          <p className="mt-1 text-xl font-bold text-red-700">
            <span className="text-3xl">{toBengaliNumber(highest.max)}</span>{" "}
            টাকা
          </p>

          <p className="mt-1 text-md text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
        </div>

        <div className="flex-1 rounded-2xl border border-gray-200 p-4">
          <p className="text-md text-gray-500">গড় দাম</p>

          <p className="mt-1 text-xl font-bold text-emerald-600">
            <span className="text-3xl">
              {toBengaliNumber(Math.round(average))}
            </span> টাকা
          </p>

          <p className="mt-1 text-md text-gray-500">প্রতি {unit}-এর হিসাবে</p>
        </div>
      </div>

      <h2 className="mb-3 mt-5 text-2xl font-bold">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full min-w-175 border-collapse text-lg">
          <thead>
            <tr className="border-b border-[#e4eae5] text-gray-500">
              <th className="px-3 py-3 text-left font-bold text-gray-500">
                বাজার
              </th>

              <th className="px-3 py-3 text-left font-bold text-gray-500">
                বিভাগ
              </th>

              <th className="px-3 py-3 text-right font-bold text-gray-500">
                সর্বনিম্ন
              </th>

              <th className="px-3 py-3 text-right font-bold text-gray-500">
                সর্বাধিক
              </th>

              <th className="px-3 py-3 text-right font-bold text-gray-500">
                গড়
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedMarkets.map((market, index) => {
              const marketAverage = (market.min + market.max) / 2;

              return (
                <tr
                  key={index}
                  className={`border-b border border-gray-200 last:border-b-0 ${
                    index % 2 === 0 ? "bg-[#f9fcf9]" : "bg-[#eff4ef]"
                  }`}
                >
                  <td className="px-3 py-3 font-medium text-[#17221a]">
                    {market.market}
                  </td>

                  <td className="px-3 py-3 text-gray-600">{market.division}</td>

                  <td className="whitespace-nowrap px-3 py-3 text-right">
                    {toBengaliNumber(market.min)}
                  </td>

                  <td className="whitespace-nowrap px-3 py-3 text-right">
                    {toBengaliNumber(market.max)}
                  </td>

                  <td className="whitespace-nowrap px-3 py-3 text-right font-semibold">
                    {toBengaliNumber(marketAverage)} টাকা
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductPriceDetailsCard;
