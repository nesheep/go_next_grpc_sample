package database

import (
	"context"
	"database/sql"
	"fmt"
	"mygrpc/entity"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/uptrace/bun"
	"github.com/uptrace/bun/dialect/mysqldialect"
)

func NewDB() (*bun.DB, error) {
	dsn := fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=true&loc=Asia%%2FTokyo",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_DATABASE"),
	)

	sqldb, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, err
	}

	db := bun.NewDB(sqldb, mysqldialect.New())
	return db, nil
}

func InitDB(db *bun.DB) error {
	_, err := db.NewCreateTable().Model((*entity.Todo)(nil)).IfNotExists().Exec(context.Background())
	if err != nil {
		return err
	}
	return nil
}
