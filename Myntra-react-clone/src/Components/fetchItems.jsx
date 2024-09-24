/*
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());

        dispatch(itemsActions.addInitialItems(items[0]));
        console.log(items);
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return (
    <>
      <div>
        Fetch Done:{fetchStatus.fetchDone}
        Currently Fetching:{fetchStatus.currentlyFetching}
      </div>
    </>
  );
};
export default FetchItems;
*/
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return; // Prevent refetch if already done

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted()); // Start fetching

    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch items");
        }
        return res.json();
      })
      .then(({ items }) => {
        if (items && items.length > 0) {
          dispatch(itemsActions.addInitialItems(items[0])); // Only add the first item if exists
        }
        dispatch(fetchStatusActions.markFetchDone()); // Mark as done
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        // Optionally, add an action to handle fetch errors
      });

    return () => {
      controller.abort(); // Clean up
    };
  }, [fetchStatus, dispatch]);

  return <></>;
};

export default FetchItems;
