import propTypes from 'prop-types';
import css from '../Section/Section.module.css'
import React from 'react'

export function Section({ title, children }) {
  return (
    <section className={css.container}>
      {title &&<h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  )
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};