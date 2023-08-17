import React, { useContext, useState } from "react";

const BookmarkContext = React.createContext();

function BookMarkProvider({ children }) {
    const [bookMark, setBookMark] = useState([]);
    const [bookmarkSpanish, setBookmarkSpanish] = useState([]);
    const value = { bookMark, setBookMark, bookmarkSpanish, setBookmarkSpanish };

    return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>
}

const useBookmark = () => useContext(BookmarkContext);

export { useBookmark, BookMarkProvider };