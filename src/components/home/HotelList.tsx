import { Flex, Image, ListRow, Skeleton, Text } from "@sadang-olaf/ui";
import withAsyncBoundary from "../../hocs/withAsyncBoundary";
import useHotels from "../../hooks/useHotels";
import InfiniteScroll from "react-infinite-scroll-component";

function HotelList() {
  const { data, hasNextPage, loadMore } = useHotels();

  console.log("data ", data);

  return (
    <InfiniteScroll
      dataLength={data.length}
      hasMore={hasNextPage}
      loader={<HotelListSkeleton size={3} />}
      next={loadMore}
      scrollThreshold="100px"
    >
      <ul>
        {data.map((hotel) => {
          return (
            <ListRow
              key={hotel.id}
              left={
                <Image src={hotel.image} width={40} height={40} radius={20} />
              }
              contents={
                <ListRow.Texts title={hotel.name} subTitle={hotel.comment} />
              }
              right={<Text size="t6">{hotel.price}원</Text>}
            />
          );
        })}
      </ul>
    </InfiniteScroll>
  );
}

function HotelListSkeleton({ size = 20 }: { size?: number }) {
  return new Array(size).fill(0).map((_, idx) => {
    return (
      <ListRow
        key={idx}
        left={<Skeleton width={40} height={40} radius={20} />}
        contents={
          <ListRow.Texts
            title={
              <Skeleton width={198} height={22} style={{ marginBottom: 4 }} />
            }
            subTitle={<Skeleton width={170} height={19} />}
          />
        }
        right={
          <Flex direction="column">
            <Skeleton width={50} height={22} />
          </Flex>
        }
      />
    );
  });
}

export default withAsyncBoundary(HotelList, {
  rejectedFallback: () => <div>에러가 발생했습니다.</div>,
  pendingFallback: <HotelListSkeleton />,
});
