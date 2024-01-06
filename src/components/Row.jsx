// eslint-disable-next-line react/prop-types
export default function Row({ children, className }) {
  return (
    <div className={`flex items-end gap-4 ${className}`}>
      {children}
    </div>
  );
}