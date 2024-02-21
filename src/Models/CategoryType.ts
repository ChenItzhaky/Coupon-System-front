export enum CategoryType{

    FOOD = "FOOD",
    FASHION = "FASHION",
    CARS = "CARS",
    ELECTRONICS = "ELECTRONICS",
    VACATION = "VACATION",
    HEALTH = "HEALTH",
    RESTAURANT = "RESTAURANT"
}

export interface CategoryModel {
    category: CategoryType
}