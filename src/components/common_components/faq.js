'use client';
import React from 'react';
import authorStyles from '../../styles/textStyles';

const FAQ = ({ section, author }) => {
  const styles = authorStyles[author];

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="w-[70%] text-center mt-8 mb-2">
        <h2 className={`${styles.h1.fontSize} ${styles.h1.fontWeight} ${styles.h1.color}`}>
          {section.title}
        </h2>
      </div>

      <div className="w-[70%] grid grid-cols-2 gap-x-12 gap-y-6 py-12">
        {section.contents.map((faq, index) => (
          <div key={index} className="pb-6">
            <h3 className={`${styles.h3.fontSize} ${styles.h3.fontWeight} ${styles.h3.color} mb-2`}>
              {faq.question}
            </h3>
            <p className={`${styles.paragraph.fontSize} ${styles.paragraph.color}`}>
              {faq.answer}
            </p>
            <hr className="mt-6 border-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;