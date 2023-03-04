import { FC, useEffect, useRef } from "react";

import { ReactComponent as SearchIcon } from "@assets/icons/search.svg";
import ErrorMessage from "@components/ErrorMessage";
import WithLoader from "@components/WithLoader";
import cn from "classnames";
import InfiniteScroll from "react-infinite-scroll-component";

import Button from "./components/Button";
import CoinList from "./components/CoinList";
import Filters from "./components/Filters";
import Input from "./components/Input";
import MultiDropdown from "./components/MultiDropdown";
import { useMarket } from "./hooks/useMarket";
import styles from "./Market.module.scss";

const Market: FC = () => {
	const { coinList, fetchCoins, hasMore, page, process } = useMarket();
	const firstRender = useRef<boolean>(true);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			fetchCoins(page);
		}

		// eslint-disable-next-line
	}, []);

	return (
		<div className={styles.wrapper}>
			<header className={cn("container", styles.header)}>
				<Input value="" onChange={() => {}} />
				<Button className={styles.button}>
					<SearchIcon className={styles.icon} />
				</Button>
			</header>
			<main className={styles.main}>
				<div className={styles.control}>
					<div className={cn("container", styles.block)}>
						<h1 className={styles.text}>Coins</h1>
						<MultiDropdown onChange={() => {}} value={[]} />
					</div>
					<Filters activeFilter="Gainer" className="container" />
				</div>
				<div className={cn("container", styles.content)}>
					{process === "error" ? (
						<ErrorMessage />
					) : (
						<>
							<InfiniteScroll
								dataLength={coinList.length} //This is important field to render the next data
								next={() => fetchCoins(page)}
								hasMore={hasMore}
								loader={
									process === "loading" && (
										<WithLoader loading={true}>
											<div
												style={{
													height: "100px",
													width: "100%",
													position: "relative",
												}}
											></div>
										</WithLoader>
									)
								}
								endMessage={
									<p style={{ textAlign: "center" }}>
										<b>Yay! You have seen it all</b>
									</p>
								}
							>
								<CoinList coinList={coinList} />
							</InfiniteScroll>
						</>
					)}
				</div>
			</main>
		</div>
	);
};

export default Market;
