import React, { useState } from 'react';
import Card1 from './Card1';

import { keeps } from '../data';
import CustomInput from './CustomInput';
import Masonry from 'react-masonry-css';

export default function FullWidthGrid({ setNumSelected, numSelected, open }) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [data, setData] = useState(keeps);
  const breakpointColumnsObj = {
    1920: open ? 4 : 5,
    1280: open ? 2 : 3,
    960: open ? 1 : 2,
    600: 1,
  };
  const pinned = data.filter((item) => item.pinned === true);
  //! first pass all props like below one then say about spread
  return (
    <div>
      <CustomInput
        setTitle={setTitle}
        setNote={setNote}
        setData={setData}
        data={data}
        title={title}
        note={note}
        open={open}
      />
      {pinned.length !== 0 && (
        <>
          <h3 style={{ margin: '7px 0' }}>Pinned</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {pinned.map((item) => (
              <Card1
                key={item.id}
                src={item.image}
                note={item.note}
                title={item.title}
                Id={item.id}
                selected={item.selected}
                pinned={item.pinned}
                data={data}
                setData={setData}
                numSelected={numSelected}
                setNumSelected={setNumSelected}
              />
            ))}
          </Masonry>
        </>
      )}

      {
        <>
          {pinned.length !== 0 && <h3 style={{ margin: '7px 0' }}>Others</h3>}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {data.map(
              (item) =>
                !item.pinned && (
                  <Card1
                    key={item.id}
                    src={item.image}
                    note={item.note}
                    title={item.title}
                    Id={item.id}
                    pinned={item.pinned}
                    data={data}
                    selected={item.selected}
                    setData={setData}
                    numSelected={numSelected}
                    setNumSelected={setNumSelected}
                  />
                )
            )}
          </Masonry>
        </>
      }
      {/*       
      <Grid container>
        {data.map((item) => (
          <Grid
            key={item.image}
            item
            xs={12}
            sm={open ? 12 : 6}
            md={open ? 6 : 4}
            lg={3}
          >
            <Card1
              src={item.image}
              note={item.note}
              title={item.title}
              Id={item.id}
              selected={item.selected}
              data={data}
              setData={setData}
              numSelected={numSelected}
              setNumSelected={setNumSelected}
            />
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
}
