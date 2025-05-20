// Field.tsx
interface FieldProps {
  label: string;
  value: string;
  isLink?: boolean;
}

const Field = ({ label, value, isLink }: FieldProps) => (
  <div className="flex flex-col sm:flex-row sm:items-center py-2">
    <div className="sm:w-1/3 font-medium mb-1 sm:mb-0">
      {label}
      <span className="text-red-500">*</span>
    </div>
    <div className="sm:w-2/3">
      {isLink ? (
        <a href={value} target="_blank" className="text-blue-600 underline">
          {value}
        </a>
      ) : (
        <span className="text-gray-700">{value}</span>
      )}
    </div>
  </div>
);

export default Field;
