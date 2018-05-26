(ns tcrfactory.shared.graphql-schema)

(def graphql-schema "
  scalar Date
  scalar Keyword

  type Query {
    registry(registry_address: ID!): Registry
    searchRegistries(keyword: String): [Registry]
  }

  enum RegEntryStatus {
    regEntry_status_challengePeriod
    regEntry_status_commitPeriod
    regEntry_status_revealPeriod
    regEntry_status_blacklisted
    regEntry_status_whitelisted
  }

  type Registry {
    registry_address: ID
    registry_title: String
    registry_description: String
    registry_db: String
    registry_token: String
    registry_tokenTotalSupply: String
    registry_tokenName: String
    registry_tokenSymbol: String
    registry_createdOn: Date
    registry_challengePeriodDuration: Int
    registry_commitPeriodDuration: Int
    registry_revealPeriodDuration: Int
    registry_deposit: Float
    registry_entries(status: RegEntryStatus): [RegEntry]
  }

  type RegEntry {
    regEntry_address: ID
    regEntry_version: Int
    regEntry_title: String
    regEntry_description: String
    regEntry_status: RegEntryStatus
    regEntry_creator: String
    regEntry_deposit: Int
    regEntry_createdOn: Date
    regEntry_challengePeriodEnd: Date
    challenge_challenger: String
    challenge_createdOn: Date
    challenge_description: String
    challenge_rewardPool: Int
    challenge_commitPeriodEnd: Date
    challenge_revealPeriodEnd: Date
    challenge_votesFor: Int
    challenge_votesAgainst: Int
    challenge_votesTotal: Int
    challenge_claimedRewardOn: Date
  }
")
