export default function Card({ icon, title, description }) {
    return (
      <div className='border border-paragraph p-5'>
        {icon && (
          <div className="mb-5 icon">
            {icon}
          </div>
        )}
        <h3 className='font-plus-jakarta text-dark font-semibold text-2xl mb-2'>
          {title}
        </h3>
        <p className='text-paragraph font-plus-jakarta text-md'>
          {description}
        </p>
      </div>
    );
  }