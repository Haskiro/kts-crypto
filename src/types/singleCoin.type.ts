export type Platforms = {
	decimal_place?: any;
	contract_address: string;
};

export type DetailPlatforms = {} & Record<string, Platforms>;

export type Description = {
	en: string;
};

export type ReposUrl = {
	github: string[];
	bitbucket: any[];
};

export type Links = {
	homepage: string[];
	blockchain_site: string[];
	official_forum_url: string[];
	chat_url: string[];
	announcement_url: string[];
	twitter_screen_name: string;
	facebook_username: string;
	bitcointalk_thread_identifier?: any;
	telegram_channel_identifier: string;
	subreddit_url: string;
	repos_url: ReposUrl;
};

export type Image = {
	thumb: string;
	small: string;
	large: string;
};

export type CurrentPrice = {
	aed: number;
	ars: number;
	aud: number;
	bch: number;
	bdt: number;
	bhd: number;
	bmd: number;
	bnb: number;
	brl: number;
	btc: number;
	cad: number;
	chf: number;
	clp: number;
	cny: number;
	czk: number;
	dkk: number;
	dot: number;
	eos: number;
	eth: number;
	eur: number;
	gbp: number;
	hkd: number;
	huf: number;
	idr: number;
	ils: number;
	inr: number;
	jpy: number;
	krw: number;
	kwd: number;
	lkr: number;
	ltc: number;
	mmk: number;
	mxn: number;
	myr: number;
	ngn: number;
	nok: number;
	nzd: number;
	php: number;
	pkr: number;
	pln: number;
	rub: number;
	sar: number;
	sek: number;
	sgd: number;
	thb: number;
	try: number;
	twd: number;
	uah: number;
	usd: number;
	vef: number;
	vnd: number;
	xag: number;
	xau: number;
	xdr: number;
	xlm: number;
	xrp: number;
	yfi: number;
	zar: number;
	bits: number;
	link: number;
	sats: number;
};

export type Ath = {} & CurrentPrice;

export type AthChangePercentage = {} & CurrentPrice;

export type AthDate = {
	aed: Date;
	ars: Date;
	aud: Date;
	bch: Date;
	bdt: Date;
	bhd: Date;
	bmd: Date;
	bnb: Date;
	brl: Date;
	btc: Date;
	cad: Date;
	chf: Date;
	clp: Date;
	cny: Date;
	czk: Date;
	dkk: Date;
	dot: Date;
	eos: Date;
	eth: Date;
	eur: Date;
	gbp: Date;
	hkd: Date;
	huf: Date;
	idr: Date;
	ils: Date;
	inr: Date;
	jpy: Date;
	krw: Date;
	kwd: Date;
	lkr: Date;
	ltc: Date;
	mmk: Date;
	mxn: Date;
	myr: Date;
	ngn: Date;
	nok: Date;
	nzd: Date;
	php: Date;
	pkr: Date;
	pln: Date;
	rub: Date;
	sar: Date;
	sek: Date;
	sgd: Date;
	thb: Date;
	try: Date;
	twd: Date;
	uah: Date;
	usd: Date;
	vef: Date;
	vnd: Date;
	xag: Date;
	xau: Date;
	xdr: Date;
	xlm: Date;
	xrp: Date;
	yfi: Date;
	zar: Date;
	bits: Date;
	link: Date;
	sats: Date;
};

export type Atl = {} & CurrentPrice;

export type AtlChangePercentage = {} & CurrentPrice;

export type AtlDate = {} & AthDate;

export type MarketCap = {} & CurrentPrice;

export type FullyDilutedValuation = {} & CurrentPrice;

export type TotalVolume = {} & CurrentPrice;

export type High24h = {} & CurrentPrice;

export type Low24h = {} & CurrentPrice;

export type PriceChange24hInCurrency = {} & CurrentPrice;

export type PriceChangePercentage1hInCurrency = {} & CurrentPrice;

export type PriceChangePercentage24hInCurrency = {} & CurrentPrice;

export type PriceChangePercentage7dInCurrency = {} & CurrentPrice;

export type PriceChangePercentage14dInCurrency = {} & CurrentPrice;

export type PriceChangePercentage30dInCurrency = {} & CurrentPrice;

export type PriceChangePercentage60dInCurrency = {} & CurrentPrice;

export type PriceChangePercentage200dInCurrency = {} & CurrentPrice;

export type PriceChangePercentage1yInCurrency = {} & CurrentPrice;

export type MarketCapChange24hInCurrency = {} & CurrentPrice;

export type MarketCapChangePercentage24hInCurrency = {} & CurrentPrice;

export type MarketData = {
	current_price: CurrentPrice;
	total_value_locked?: any;
	mcap_to_tvl_ratio?: any;
	fdv_to_tvl_ratio?: any;
	roi?: any;
	ath: Ath;
	ath_change_percentage: AthChangePercentage;
	ath_date: AthDate;
	atl: Atl;
	atl_change_percentage: AtlChangePercentage;
	atl_date: AtlDate;
	market_cap: MarketCap;
	market_cap_rank: number;
	fully_diluted_valuation: FullyDilutedValuation;
	total_volume: TotalVolume;
	high_24h: High24h;
	low_24h: Low24h;
	price_change_24h: number;
	price_change_percentage_24h: number;
	price_change_percentage_7d: number;
	price_change_percentage_14d: number;
	price_change_percentage_30d: number;
	price_change_percentage_60d: number;
	price_change_percentage_200d: number;
	price_change_percentage_1y: number;
	market_cap_change_24h: number;
	market_cap_change_percentage_24h: number;
	price_change_24h_in_currency: PriceChange24hInCurrency;
	price_change_percentage_1h_in_currency: PriceChangePercentage1hInCurrency;
	price_change_percentage_24h_in_currency: PriceChangePercentage24hInCurrency;
	price_change_percentage_7d_in_currency: PriceChangePercentage7dInCurrency;
	price_change_percentage_14d_in_currency: PriceChangePercentage14dInCurrency;
	price_change_percentage_30d_in_currency: PriceChangePercentage30dInCurrency;
	price_change_percentage_60d_in_currency: PriceChangePercentage60dInCurrency;
	price_change_percentage_200d_in_currency: PriceChangePercentage200dInCurrency;
	price_change_percentage_1y_in_currency: PriceChangePercentage1yInCurrency;
	market_cap_change_24h_in_currency: MarketCapChange24hInCurrency;
	market_cap_change_percentage_24h_in_currency: MarketCapChangePercentage24hInCurrency;
	total_supply: number;
	max_supply: number;
	circulating_supply: number;
	last_updated: Date;
};

export type PublicInterestStats = {
	alexa_rank: number;
	bing_matches?: any;
};

export type SingleCoin = {
	id: string;
	symbol: string;
	name: string;
	asset_platform_id?: any;
	platforms: Record<string, string>;
	detail_platforms: DetailPlatforms;
	block_time_in_minutes: number;
	hashing_algorithm: string;
	categories: string[];
	public_notice?: any;
	additional_notices: any[];
	description: Description;
	links: Links;
	image: Image;
	country_origin: string;
	genesis_date: string;
	sentiment_votes_up_percentage: number;
	sentiment_votes_down_percentage: number;
	market_cap_rank: number;
	coingecko_rank: number;
	coingecko_score: number;
	developer_score: number;
	community_score: number;
	liquidity_score: number;
	public_interest_score: number;
	market_data: MarketData;
	public_interest_stats: PublicInterestStats;
	status_updates: any[];
	last_updated: Date;
};
