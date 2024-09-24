import clsx from "clsx";
import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.cell}>Type</th>
          <th className={css.cell}>Amount</th>
          <th className={css.cell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, id) => (
          <tr key={id} className={css.row}>
            <td className={clsx(css.cell, css.transactionType)}>{item.type}</td>
            <td className={css.cell}>{item.amount}</td>
            <td className={css.cell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TransactionHistory;
